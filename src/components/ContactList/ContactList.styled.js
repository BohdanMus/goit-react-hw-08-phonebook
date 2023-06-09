import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  background-color: #e2e2e2;
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`;
export const ContactNumber = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`;
