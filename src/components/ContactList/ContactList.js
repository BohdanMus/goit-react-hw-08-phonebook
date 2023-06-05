import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              <RiDeleteBin2Line />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
