import { ContactForm } from '../components/ContactForm/ContactForm';
import { GlobalStyle } from '../components/GlobalStyle';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Loader } from '../components/Loader/Loader';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectStatusFilter,
} from 'redux/contacts/ContactsSelectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectStatusFilter);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const doAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };
  const doDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeInput = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const filterNew = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };
  return (
    <div>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm onAdd={doAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeInput={onChangeInput} />
      {isLoading && <Loader />}
      {error && <p>Oops, something wrong is going on...</p>}
      <ContactList contacts={filterNew()} onDelete={doDeleteContact} />
    </div>
  );
};

export default Contacts;
