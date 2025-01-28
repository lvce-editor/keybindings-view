import { cp, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.js'

const sharedProcessPath = join(root, 'packages', 'server', 'node_modules', '@lvce-editor', 'shared-process', 'index.js')

const sharedProcessUrl = pathToFileURL(sharedProcessPath).toString()

const sharedProcess = await import(sharedProcessUrl)

process.env.PATH_PREFIX = '/keybindings-view'
const { commitHash } = await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

const rendererWorkerPath = join(root, 'dist', commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const content = await readFile(rendererWorkerPath, 'utf8')
const keyBindingsWorkerPath = join(root, '.tmp/dist/dist/keyBindingsViewWorkerMain.js')
const remoteUrl = getRemoteUrl(keyBindingsWorkerPath)

if (!content.includes('// const keyBindingsViewWorkerUrl = ')) {
  const occurrence = `// const keyBindingsViewWorkerUrl = \`\${assetDir}/packages/keybindings-view/dist/keyBindingsViewWorkerMain.js\`
  const keyBindingsViewWorkerUrl = \`${remoteUrl}\``
  const replacement = `const keyBindingsViewWorkerUrl = \`\${assetDir}/packages/keybindings-view/dist/keyBindingsViewWorkerMain.js\``
  const newContent = content.replace(occurrence, replacement)
  await writeFile(rendererWorkerPath, newContent)
}

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
