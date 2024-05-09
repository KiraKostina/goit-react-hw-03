import React from 'react';
import { useState } from 'react';
import initialContacts from '../contacts.json';
import ContactList from './ContactList/ContactList';


export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox /> */}
      <ContactList contacts={contacts} />
    </div>
  );
}