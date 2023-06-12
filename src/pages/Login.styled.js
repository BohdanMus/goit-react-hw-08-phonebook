import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Link = styled(StyledLink)`
  color: #239b56;
  font-size: 16px;
  border-bottom: 1px solid #239b56;
`;
