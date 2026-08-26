# Keybinding persistence fails on Windows

| Field    | Value                                           |
| -------- | ----------------------------------------------- |
| Severity | High                                            |
| Category | Functional / platform compatibility             |
| URL      | https://lvce-editor.github.io/keybindings-view/ |

## Description

Adding or changing a keybinding fails on Windows when the user configuration
directory does not already exist. The capture dialog cannot complete because
the app-filesystem fallback attempts to create the invalid directory
`file://`.

Expected: `app://keybindings.json` creates its parent configuration directory
and persists the mutation on Windows just as it does on Linux and macOS.

Actual: the mutation rejects with:

```text
Failed to write C:\Users\runneradmin\.config\lvce-oss\keybindings.json:
Failed to create directory "file://":
TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must be absolute
```

## Reproduction

1. Start the keybindings-view combined build on Windows with no existing
   `lvce-oss` configuration directory.
2. Open **Keyboard Shortcuts**.
3. Add or change a keybinding and submit the capture dialog.
4. Observe that the dialog disposal fails and the mutation is not applied.

The issue was reproduced by both mutation browser tests in the Windows PR
workflow for the persistence implementation. The same build passed on Ubuntu
and macOS.

## Root cause

The shared app-filesystem fallback derives a parent directory with the
workspace URI helper. On Windows, that helper uses the wrong separator for the
native configuration path and truncates it to `file://`.

## Resolution

The host now derives native parent directories with a separator-aware helper
that supports POSIX and Windows paths while preserving URI handling. The fix
landed in
[lvce-editor#13083](https://github.com/lvce-editor/lvce-editor/pull/13083)
and is included in `@lvce-editor/server` 0.94.7.

The host's unit, integration, and full CI suites passed on Windows x64 and
Windows arm64. Keybindings-view then consumed server 0.94.7 in
[keybindings-view#682](https://github.com/lvce-editor/keybindings-view/pull/682);
its full Windows workflow passed, including both mutation browser tests that
originally exposed this issue.
