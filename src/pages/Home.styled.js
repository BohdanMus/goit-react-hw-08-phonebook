import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
  }
`;
