
/* IMPORT */

import GitMan from 'gitman';
import {alert, openInWindow, prompt} from 'vscode-extras';

/* MAIN */

const open = async ( inNewWindow: boolean = false ): Promise<void> => {

  const repositories = await GitMan.get ( true );

  if ( !repositories.length ) return alert.error ( 'No repositories found, configure GitMan first!' );

  const items = repositories.map ( repo => ({
    label: `${repo.user}/${repo.name}`,
    description: repo.description,
    path: repo.path
  }));

  const item = await prompt.select ( `Select a repository to open${inNewWindow ? ' in a new window' : ''}...`, items );

  if ( !item ) return;

  openInWindow ( item.path, inNewWindow );

};

const openInNewWindow = (): Promise<void> => {

  return open ( true );

};

/* EXPORT */

export {open, openInNewWindow};
