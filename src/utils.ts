
/* IMPORT */

import GitMan from 'gitman';
import type {Repository} from './types';

/* MAIN */

const getRepositories = async (): Promise<Repository[]> => {

  try {

    return await GitMan.get ( true );

  } catch {

    return [];

  }

};

/* EXPORT */

export {getRepositories};
