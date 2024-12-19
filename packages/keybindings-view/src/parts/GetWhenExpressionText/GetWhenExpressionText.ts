const map = [
  /* 0 */ 'Empty',
  /* 1 */ 'BrowserChromium',
  /* 2 */ 'BrowserElectron',
  /* 3 */ 'BrowserFirefox',
  /* 4 */ 'FocusAbout',
  /* 5 */ 'FocusActivityBar',
  /* 6 */ 'FocusDebugInput',
  /* 7 */ 'FocusDialog',
  /* 8 */ 'FocusEditor',
  /* 9 */ 'FocusEditorCompletions',
  /* 10 */ 'FocusEditorImage',
  /* 11 */ 'FocusEditorRename',
  /* 12 */ 'FocusEditorText',
  /* 13 */ 'FocusExplorer',
  /* 14 */ 'FocusExplorerEditBox',
  /* 15 */ 'FocusExtensions',
  /* 16 */ 'FocusFindWidget',
  /* 17 */ 'FocusLocationList',
  /* 18 */ 'FocusMenu',
  /* 19 */ 'FocusProblems',
  /* 20 */ 'FocusQuickPickInput',
  /* 21 */ 'FocusSearchInput',
  /* 22 */ 'FocusSearchResults',
  /* 23 */ 'FocusSimpleBrowserInput',
  /* 24 */ 'FocusSourceControlInput',
  /* 25 */ 'FocusTerminal',
  /* 26 */ 'FocusTitleBarMenuBar',
  /* 27 */ 'FocusViewletList',
  /* 28 */ 'FocusOutput',
  /* 29 */ 'FocusDebugConsoleInput',
  /* 30 */ 'FocusDebugScope',
  /* 31 */ 'FocusSearchReplaceInput',
  /* 32 */ 'FocusMatchCase',
  /* 33 */ 'FocusRegex',
  /* 34 */ 'FocusWholeWord',
  /* 35 */ 'FocusReplaceAll',
  /* 36 */ 'FocusPreserveCase',
  /* 37 */ 'FocusSimpleBrowser',
  /* 38 */ 'FocusSourceActions',
]

export const getWhenExpressionText = (whenExpression: number): string => {
  return map[whenExpression] || 'n/a'
}
