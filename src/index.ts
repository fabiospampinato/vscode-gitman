
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'gitman.open', Commands.open );
  vscode.commands.registerCommand ( 'gitman.openInNewWindow', Commands.openInNewWindow );

};

/* EXPORT */

export {activate};
