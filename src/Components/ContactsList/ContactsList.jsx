import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import s from '../ContactsList/ContactsList.module.css';
// import { v4 as unId } from "uuid";

// function ContactsList(props) {
//   const { contacts, onDeleteContact } = props;

const getVisibleContacts = (filter, items) => {
  const normalizeContacts = filter.toLocaleLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(normalizeContacts),
  );
};

export default function ContactsList() {
  const contacts = useSelector(state =>
    getVisibleContacts(state.contacts.filter, state.contacts.items),
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.li} key={id}>
          {name}: {number}
          <Button
            type="button"
            text="Delete"
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

// const getVisibleContacts = (filter, items) => {
//   const normalizeContacts = filter.toLocaleLowerCase();

//   return items.filter(item =>
//     item.name.toLowerCase().includes(normalizeContacts),
//   );
// };

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state.contacts.filter, state.contacts.items),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
