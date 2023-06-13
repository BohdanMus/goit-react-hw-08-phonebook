import { useAuth } from 'hooks';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { ErrorMessage, Form } from './RegisterForm.styled';
import { Field, Formik } from 'formik';
import { PageLoader } from 'components/RefreshLoader/RefreshLoader';
import {
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
  InputRightElement,
  IconButton,
  Button,
} from '@chakra-ui/react';

import { FiUser } from 'react-icons/fi';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { BiShow, BiHide } from 'react-icons/bi';
import { Si1Password } from 'react-icons/si';
import { GoMail } from 'react-icons/go';

const FormSchema = Yup.object().shape({
  name: Yup.mixed().required('Required field!'),
  email: Yup.string().email().required('Required field!'),
  password: Yup.string().min(7).required('Required field!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            dispatch(
              register({
                name: values.name,
                email: values.email,
                password: values.password,
              })
            );
            actions.resetForm();
          }}
        >
          {props => {
            const isErrorName = !props.values.name && props.touched.name;
            const isErrorEmail = !props.values.email && props.touched.email;
            const isErrorPassword =
              !props.values.password && props.touched.password;
            return (
              <Form>
                <Field name="name">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorName} mb={3}>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          focusBorderColor="#239b56"
                          placeholder="Enter name"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={FiUser} color="grey.800" />
                        </InputLeftElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="name" component="span" />
                <Field name="email">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorEmail} mb={3}>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          focusBorderColor="#239b56"
                          placeholder="Enter email"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={GoMail} color="grey.800" />
                        </InputLeftElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="email" component="span" />
                <Field name="password">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorPassword}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          {...field}
                          focusBorderColor="#239b56"
                          pr="4.5rem"
                          type={show ? 'text' : 'password'}
                          placeholder="Enter password"
                        />
                        <InputLeftElement pointerEvents="none">
                          <Icon as={Si1Password} color="grey.800" />
                        </InputLeftElement>
                        <InputRightElement width="4.5rem">
                          {show ? (
                            <IconButton
                              h="1.75rem"
                              size="lg"
                              variant="ghost"
                              icon={<BiShow />}
                              onClick={handleClick}
                            ></IconButton>
                          ) : (
                            <IconButton
                              h="1.75rem"
                              size="lg"
                              variant="ghost"
                              icon={<BiHide />}
                              onClick={handleClick}
                            ></IconButton>
                          )}
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <ErrorMessage name="password" component="span" />
                <Button
                  leftIcon={<HiOutlinePencilSquare />}
                  mt={4}
                  backgroundColor="#239b56"
                  colorScheme="green"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};
