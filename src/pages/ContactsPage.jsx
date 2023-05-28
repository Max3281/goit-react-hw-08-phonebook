import { useDispatch } from 'react-redux';
import ContactsForm from '../components/Contacts/ContactsForm';
import Filter from '../components/Contacts/Filter';
import ContactsList from 'components/Contacts/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperations/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="contact-container">
      <h1 className="contact-header">Phonebook</h1>
      <ContactsForm />

      <h2 className="contact-header">Contacts</h2>
      <Filter />
      <ContactsList />
    </section>
  );
};

export default ContactsPage;
