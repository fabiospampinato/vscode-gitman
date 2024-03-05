
/* IMPORT */

import vscode from 'vscode';
import {getRepositories} from './utils';

/* MAIN */

const open = async ( inNewWindow: boolean = false ): Promise<void> => {

  const repositories = await getRepositories ();

  if ( !repositories.length ) return void vscode.window.showErrorMessage ( 'No repositories found, configure GitMan first!' );

  const items = repositories.map ( repo => ({
    label: `${repo.user}/${repo.name}`,
    description: repo.description,
    path: repo.path
  }));

  const item = await vscode.window.showQuickPick ( items );

  if ( !item ) return;

  const repoUri = vscode.Uri.file ( item.path );

  vscode.commands.executeCommand ( 'vscode.openFolder', repoUri, inNewWindow );

};

const openInNewWindow = (): Promise<void> => {

  return open ( true );

};

/* EXPORT */

export {open, openInNewWindow};
