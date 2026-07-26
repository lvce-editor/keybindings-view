# Keybindings View Exploratory Test Report

| Field   | Value                                                                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Date    | 2026-07-26                                                                                                                                   |
| App URL | https://lvce-editor.github.io/keybindings-view/                                                                                              |
| Session | keybindings-view-dogfood                                                                                                                     |
| Scope   | Filtering, editing, adding, removing, duplicate/same-keybinding display, keyboard access, persistence, responsive layout, and console errors |

## Test matrix

| Area             | Scenarios                                                                   | Result                                                                       |
| ---------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Initial load     | Rendering, data population, console and page errors                         | Pass                                                                         |
| Filtering        | Command text, key text, no results, clearing, case, whitespace, rapid input | Fail — fast input and modifier recording are broken; command/case/clear pass |
| Editing          | Existing binding, cancellation, invalid/empty input, conflict behavior      | Fail — capture and cancellation work, commit does not                        |
| Adding           | Unbound command, alternative binding, cancellation, duplicate binding       | Fail — action is a no-op                                                     |
| Removing         | Existing binding, alternative binding, repeated removal                     | Fail — action is a no-op                                                     |
| Same keybindings | Duplicate shortcut indicator/list, navigation between conflicts             | Pass                                                                         |
| Persistence      | Refresh after add/edit/remove, filter persistence                           | Fail — mutations apply but revert after reload                               |
| Keyboard access  | Table navigation, Enter/Escape behavior, focus restoration                  | Pass for navigation and cancellation                                         |
| Layout           | 800, 1440, and 1920 pixel widths; table overflow                            | Fail — Source column is always clipped                                       |

## Confirmed issues

| Severity  | Count |
| --------- | ----- |
| Critical  | 0     |
| High      | 4     |
| Medium    | 3     |
| Low       | 1     |
| **Total** | **8** |

| Issue                                                                                     | Fix status         |
| ----------------------------------------------------------------------------------------- | ------------------ |
| [Record Keys drops shortcut modifiers](record-keys-drops-modifiers/README.md)             | Fixed and verified |
| [Filter drops characters during fast typing](filter-drops-fast-input/README.md)           | Fixed and verified |
| [Source column is never visible](source-column-not-visible/README.md)                     | Fixed and verified |
| [Keybinding mutations do not apply](keybinding-mutations-do-not-apply/README.md)          | Fixed and verified |
| [Keybinding mutations do not persist](keybinding-mutations-do-not-persist/README.md)      | Fixed and verified |
| [Reset Keybinding does not restore defaults](reset-keybinding-does-not-work/README.md)    | Fixed and verified |
| [Keybinding persistence fails on Windows](windows-keybinding-persistence-fails/README.md) | Fixed and verified |
| [No-results filter has no empty-state message](no-results-has-no-message/README.md)       | Fixed and verified |

## Final verification

The final combined build uses `@lvce-editor/server` 0.94.7. Its browser suite
passed on Ubuntu, macOS, and Windows with 64 tests passing, 6 intentionally
skipped, and no failures on each platform.

The deployed build was also verified in a fresh browser session:

1. Changing `About.handleClickClose` to `Ctrl+Alt+9 / User` survived a full
   page reload.
2. **Reset Keybinding** restored `Escape / System`, which survived a second
   full page reload.
3. The browser reported no page or console errors.
4. The QA-created persisted keybinding record was removed and the default
   binding was confirmed after one final reload.
