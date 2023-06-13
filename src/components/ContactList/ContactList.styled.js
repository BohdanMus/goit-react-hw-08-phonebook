import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto;
  list-style: none;
  @media screen and (min-width: 480px) {
    width: 400px;
  }
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
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 480px) {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const ContactNumber = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 480px) {
    font-weight: 700;
    font-size: 16px;
  }
`;
