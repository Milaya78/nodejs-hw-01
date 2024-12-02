import { readContacts } from '../utils/readContacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

console.log(fs);

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const newList = [...contactList, ...newContacts];
  await writeContacts(newList);
};

generateContacts(5);
