import { useEffect } from 'react';
import PhoneBookTitle from '../../Components/PhoneBookTitle/PhoneBookTitle';
import ContactsList from '../../Components/ContactsList/ContactsList';
import Form from '../../Components/Form/Form';
import Filter from '../../Components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
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
