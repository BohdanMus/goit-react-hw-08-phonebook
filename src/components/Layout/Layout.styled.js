import styled from 'styled-components';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: baseline;
  }
`;
