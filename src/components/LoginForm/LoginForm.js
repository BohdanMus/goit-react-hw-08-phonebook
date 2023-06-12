import {
  Button,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { GoMail } from 'react-icons/go';
import { Si1Password } from 'react-icons/si';
import { BiShow, BiHide } from 'react-icons/bi';
import { SlLogin } from 'react-icons/sl';
import { useAuth } from 'hooks';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { PageLoader } from 'components/RefreshLoader/RefreshLoader';
import { ErrorMessage, Form } from './LoginForm.styled';

const FormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required field!'),
  password: Yup.mixed().required('Required field!'),
});

export const LoginForm = () => {
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
          initialValues={{ email: '', password: '' }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            dispatch(
              logIn({
                email: values.email,
                password: values.password,
              })
            );
            actions.resetForm();
          }}
        >
          {props => {
            const isErrorEmail = !props.values.email && props.touched.email;
            const isErrorPassword =
              !props.values.password && props.touched.password;
            return (
              <Form>
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
                <ErrorMessage name="email" component="div" />
                <Field name="password">
                  {({ field }) => (
                    <FormControl isRequired isInvalid={isErrorPassword}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          {...field}
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
                <ErrorMessage name="password" component="div" />
                <Button
                  leftIcon={<SlLogin />}
                  mt={4}
                  backgroundColor="#239b56"
                  colorScheme="green"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Log in
                </Button>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};
