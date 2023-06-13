import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  color: red;
`;

export const Form = styled(FormikForm)`
  position: relative;
  margin: auto;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 40px;

  background-color: white;
  border-radius: 8px;
`;

export const Field = styled(FormikInput)`
  box-sizing: border-box;

  padding: 5px 20px;
  font-size: 20px;
  line-height: 1.5;

  border-radius: 8px;
`;
