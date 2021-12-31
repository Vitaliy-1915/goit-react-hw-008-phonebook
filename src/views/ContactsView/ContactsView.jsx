import React from 'react';
import PhoneBookTitle from '../../Components/PhoneBookTitle/PhoneBookTitle';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Form from '../../Components/Form/Form';
import Filter from '../../Components/Filter/Filter';

function ContactsView() {
  return (
    <div className="App">
      <PhoneBookTitle title="Phonebook" />
      <Form />
      <PhoneBookTitle title="Contacts" />
      <Filter />
      <ContactsList />
    </div>
  );
}

export default ContactsView;
