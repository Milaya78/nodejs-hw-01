import { readContacts } from '../utils/readContacts';
import { createFakeContact } from '../utils/createFakeContact';
import { writeContacts } from '../utils/writeContacts';

export const addOneContact = async () => {
  const contactList = await readContacts();
  const contact = createFakeContact();
  await writeContacts([...contactList, contact]);
};

addOneContact();
