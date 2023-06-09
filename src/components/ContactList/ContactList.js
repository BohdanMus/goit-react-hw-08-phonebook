import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { List, Item, ContactName, ContactNumber } from './ContactList.styled';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { IconButton } from '@chakra-ui/react';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <ContactName>
              <FiUser />
              {contact.name}:
            </ContactName>
            <ContactNumber>
              <BsTelephone />
              {contact.number}
            </ContactNumber>
            <IconButton
              colorScheme="red"
              icon={<RiDeleteBin2Line />}
              onClick={() => onDelete(contact.id)}
            />
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
