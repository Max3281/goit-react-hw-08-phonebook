import { useDispatch } from 'react-redux';
import ContactsForm from '../../components/ContactsForm/ContactsForm';
import Filter from '../../components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
