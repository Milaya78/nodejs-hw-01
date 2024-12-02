import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
