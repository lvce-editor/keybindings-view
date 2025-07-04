import { cp, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const __dirname = import.meta.dirname

const root = join(__dirname, '..', '..', '..')

export const getRemoteUrl = (path) => {
  const url = pathToFileURL(path).toString().slice(8)
  return `/remote/${url}`
}

const nodeModulesPath = join(root, 'packages', 'server', 'node_modules')

const serverStaticPath = join(nodeModulesPath, '@lvce-editor', 'static-server', 'static')

const RE_COMMIT_HASH = /^[a-z\d]+$/
const isCommitHash = (dirent) => {
  return dirent.length === 7 && dirent.match(RE_COMMIT_HASH)
}

const dirents = await readdir(serverStaticPath)
const commitHash = dirents.find(isCommitHash) || ''
const rendererWorkerMainPath = join(serverStaticPath, commitHash, 'packages', 'renderer-worker', 'dist', 'rendererWorkerMain.js')

const content = await readFile(rendererWorkerMainPath, 'utf-8')

const keyBindingsWorkerPath = join(root, '.tmp/dist/dist/keyBindingsViewWorkerMain.js')

const remoteUrl = getRemoteUrl(keyBindingsWorkerPath)
if (!content.includes('// const keyBindingsViewWorkerUrl = ')) {
  await cp(rendererWorkerMainPath, rendererWorkerMainPath + '.original')
  const occurrence = `const keyBindingsViewWorkerUrl = \`\${assetDir}/packages/keybindings-view-worker/dist/keyBindingsViewWorkerMain.js\``
  const replacement = `// const keyBindingsViewWorkerUrl = \`\${assetDir}/packages/keybindings-view-worker/dist/keyBindingsViewWorkerMain.js\`
const keyBindingsViewWorkerUrl = \`${remoteUrl}\``

  const newContent = content.replace(occurrence, replacement)
  await writeFile(rendererWorkerMainPath, newContent)
}
