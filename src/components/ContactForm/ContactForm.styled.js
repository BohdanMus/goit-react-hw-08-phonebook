import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0px;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: red;
`;
