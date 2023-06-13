import PropTypes from 'prop-types';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { List, Item, ContactName, ContactNumber } from './ContactList.styled';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { GrConfigure } from 'react-icons/gr';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { ContactModalWindow } from 'components/ContactModalWindow/ContactModalWindow';

export const ContactList = ({ contacts, onDelete }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleOpen = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: true }));
  };

  const handleClose = contactId => {
    setIsOpen(prevIsOpen => ({ ...prevIsOpen, [contactId]: false }));
  };
  return (
    <List>
      {contacts.map(contact => {
        const isModalOpen = isOpen[contact.id] || false;
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
            <ButtonGroup
              size={{ base: 'sm', md: 'lg' }}
              isAttached
              variant="solid"
            >
              <IconButton
                colorScheme="blue"
                icon={<GrConfigure color="white" />}
                onClick={() => handleOpen(contact.id)}
              />
              <IconButton
                colorScheme="red"
                icon={<RiDeleteBin2Line />}
                onClick={() => onDelete(contact.id)}
              />
            </ButtonGroup>
            <ContactModalWindow
              contact={contact}
              isOpen={isModalOpen}
              onClose={() => handleClose(contact.id)}
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
