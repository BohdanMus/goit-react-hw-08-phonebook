import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';

export const Filter = ({ filter, onChangeInput }) => {
  return (
    <FormControl>
      <FormLabel>Find contacts by name</FormLabel>
      <InputGroup>
        <Input
          focusBorderColor="#239b56"
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeInput}
          placeholder="Enter name"
        />
        <InputLeftElement pointerEvents="none">
          <Icon as={FiUser} />
        </InputLeftElement>
      </InputGroup>
    </FormControl>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeInput: PropTypes.func.isRequired,
};
