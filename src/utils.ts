
/* IMPORT */

import * as vscode from 'vscode';
import * as Commands from './commands';

/* UTILS */

const Utils = {

  initCommands ( context: vscode.ExtensionContext ) {

    const {commands} = vscode.extensions.getExtension ( 'fabiospampinato.vscode-gitman' ).packageJSON.contributes;

    commands.forEach ( ({ command, title }) => {

      const commandName = command.split ( '.' )[1] as string;
      const handler = Commands[commandName];
      const disposable = vscode.commands.registerCommand ( command, () => handler () );

      context.subscriptions.push ( disposable );

    });

    return Commands;

  }

};

/* EXPORT */

export default Utils;
