const extensionHostExecuteCommand = 'ExtensionHost.executeCommand'

interface KeyBinding {
  readonly args?: readonly unknown[]
  readonly command: string
}

export const getCommandName = (keyBinding: KeyBinding): string => {
  const { args, command } = keyBinding
  if (command === extensionHostExecuteCommand && Array.isArray(args) && typeof args[0] === 'string') {
    return args[0]
  }
  return command
}
