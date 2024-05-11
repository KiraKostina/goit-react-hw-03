import React from 'react';
import { useState } from 'react';

import initialContacts from '../contacts.json';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';


export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('');

  const addContacts = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
