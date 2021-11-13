
/* IMPORT */

import GitMan from '@fabiospampinato/gitman';
import * as vscode from 'vscode';

/* HELPERS */

const getRepos = async () => {

  try {

    return await GitMan.get ( true );

  } catch {

    return [];

  }

};

/* COMMANDS */

async function open ( inNewWindow: boolean = false ) {

  const repos = await getRepos ();

  if ( !repos.length ) return vscode.window.showErrorMessage ( 'No repositories found, configure GitMan first!' );

  const items = repos.map ( repo => ({
    label: `${repo.user}/${repo.name}`,
    description: repo.description,
    path: repo.path
  }));

  const item = await vscode.window.showQuickPick ( items );

  if ( !item ) return;

  const repoUri = vscode.Uri.file ( item.path );

  vscode.commands.executeCommand ( 'vscode.openFolder', repoUri, inNewWindow );

}

async function openInNewWindow () {

  open ( true );

}

/* EXPORT */

export {open, openInNewWindow};
