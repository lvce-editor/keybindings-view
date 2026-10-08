import { cp, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.js'

const sharedProcessPath = join(root, 'node_modules', '@lvce-editor', 'shared-process', 'index.js')

const sharedProcessUrl = pathToFileURL(sharedProcessPath).toString()

const sharedProcess = await import(sharedProcessUrl)

process.env.PATH_PREFIX = '/keybindings-view'
const { commitHash } = await sharedProcess.exportStatic({
  root,
  extensionPath: '',
  testPath: 'packages/e2e',
})

const rendererWorkerPath = join(root, 'dist', commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const content = await readFile(rendererWorkerPath, 'utf8')
const workerPath = join(root, '.tmp/dist/dist/keyBindingsViewWorkerMain.js')
const remoteUrl = getRemoteUrl(workerPath)

const occurrence = `\`${remoteUrl}\``
const replacement = `\`\${assetDir}/packages/keybindings-view-worker/dist/keyBindingsViewWorkerMain.js\``
if (!content.includes(occurrence)) {
  throw new Error('occurrence not found')
}
const newContent = content.replace(occurrence, replacement)
await writeFile(rendererWorkerPath, newContent)

await cp(
  join(root, '.tmp', 'dist', 'dist', 'keyBindingsViewWorkerMain.js'),
  join(root, 'dist', commitHash, 'packages', 'keybindings-view-worker', 'dist', 'keyBindingsViewWorkerMain.js'),
)

const distPath = join(root, 'dist')
const productionUrl = `/keybindings-view/${commitHash}/packages/keybindings-view-worker/dist/keyBindingsViewWorkerMain.js`
for (const path of await readdir(distPath, { recursive: true })) {
  if (!path.endsWith('.html')) continue
  const htmlPath = join(distPath, path)
  const html = await readFile(htmlPath, 'utf8')
  if (html.includes(remoteUrl)) {
    await writeFile(htmlPath, html.replaceAll(remoteUrl, productionUrl))
  }
}

await cp(distPath, join(root, '.tmp', 'static'), { recursive: true })
