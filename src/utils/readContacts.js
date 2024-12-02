import { readFile } from 'node:fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};
