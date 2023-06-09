import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FiUser } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.number().positive('Must be > 0!').required('Required field!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      {props => {
        const isErrorName = !props.values.name && props.touched.name;
        const isErrorNumber = !props.values.number && props.touched.number;

        return (
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl isInvalid={isErrorName} isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      placeholder="Enter name"
                      focusBorderColor="#239b56"
                    />
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FiUser} />
                    </InputLeftElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="name" component="div" />
            <Field name="number">
              {({ field }) => (
                <FormControl isInvalid={isErrorNumber} isRequired>
                  <FormLabel>Number</FormLabel>
                  <InputGroup>
                    <Input
                      {...field}
                      focusBorderColor="#239b56"
                      placeholder="Enter number"
                      type="tel"
                    />
                    <InputLeftElement pointerEvents="none">
                      <Icon as={BsTelephone} />
                    </InputLeftElement>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="number" component="div" />
            <Button
              leftIcon={<AiOutlineUserAdd />}
              mt={4}
              backgroundColor="#239b56"
              colorScheme="green"
              type="submit"
            >
              Add contact
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
