import { ContactForm } from '../components/ContactForm/ContactForm';
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
import { Title, DivContacts } from './Contacts.styled';

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
    <>
      <DivContacts>
        <Title>Phonebook</Title>
        <ContactForm onAdd={doAddContact} />
      </DivContacts>
      <DivContacts>
        <div>
          {contacts.length !== 0 && <Title>Contacts</Title>}
          {contacts.length > 0 && (
            <Filter filter={filter} onChangeInput={onChangeInput}></Filter>
          )}
        </div>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <ContactList
              contacts={filterNew()}
              onDelete={doDeleteContact}
            ></ContactList>
          )}
          {error && <p>Oops, something wrong is going on...</p>}
        </div>
      </DivContacts>
    </>
  );
};

export default Contacts;
