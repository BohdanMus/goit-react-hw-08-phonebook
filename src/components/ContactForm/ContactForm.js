import { Formik, Field } from 'formik';
import { Form, ErrorMessage } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={FormSchema}
    >
      <Form>
        <label>Name</label>
        <Field name="name" />
        <ErrorMessage name="name" component="span" />
        <label>Number</label>
        <Field type="tel" name="number" required />
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
