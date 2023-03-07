> This is just a front-end for [GitMan](https://github.com/fabiospampinato/gitman), which you must install on your system. Read its readme to learn how to configure it.

# GitMan

<p align="center">
  <img src="https://raw.githubusercontent.com/fabiospampinato/vscode-gitman/master/resources/logo.png" width="128" alt="Logo">
</p>

Frontend for [GitMan](https://github.com/fabiospampinato/gitman) for switching quickly to other repositories.

## Install

Follow the instructions in the [Marketplace](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-gitman), or run the following in the command palette:

```sh
ext install fabiospampinato.vscode-gitman
```

## Usage

It adds 2 commands to the command palette:

```js
GitMan: Open // Open a repository in the current window
GitMan: Open in New Window // Open a repository in a new window
```

It adds 2 shortcuts:

```js
'Cmd/Ctrl+Alt+P' // Triggers `GitMan: Open`
'Cmd/Ctrl+Alt+Shift+P' // Triggers `GitMan: Open in New Window`
```

## Contributing

If you found a problem, or have a feature request, please open an [issue](https://github.com/fabiospampinato/vscode-gitman/issues) about it.

If you want to make a pull request you can debug the extension using [Debug Launcher](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-debug-launcher).

## License

MIT © Fabio Spampinato
