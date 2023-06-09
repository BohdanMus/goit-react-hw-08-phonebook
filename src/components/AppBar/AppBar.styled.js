import styled from 'styled-components';

export const Header = styled.header`
  background-color: #239b56;
  padding: 10px 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    gap: 10px;
  }
`;
