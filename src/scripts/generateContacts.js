import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (count = 5) => {
  const contacts = await readContacts();
  const newContacts = Array.from({ length: count }, () => createFakeContact());
  await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
