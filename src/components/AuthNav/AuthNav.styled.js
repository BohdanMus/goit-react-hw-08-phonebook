import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  color: white;
  font-size: 16px;
  &.active {
    color: white;
    border-bottom: 1px solid white;
  }
  /* @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  } */

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const AuthDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    gap: 8px;
  }
`;
