import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactOperations/operations';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from 'redux/contactOperations/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const normalizeFilter = filter?.toLocaleLowerCase();

  const filterContacts = contacts.filter(fil => {
    return fil.name.toLocaleLowerCase().includes(normalizeFilter);
  });

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {filterContacts.length === 0 || (
        <ul className="contact-list-block">
          {filterContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className="contact-unit">
                <p className="contact-list-text">
                  {name}: {number}
                </p>
                <button
                  type="button"
                  onClick={() => delContact(id)}
                  className="delete-contact-button"
                >
                  Удалить контакт
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactsList;
