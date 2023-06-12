import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px auto;
  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  color: red;
`;
