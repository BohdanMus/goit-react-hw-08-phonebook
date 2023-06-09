import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  color: white;
  font-size: 24px;
  &.active {
    color: white;
    border-bottom: 1px solid white;
  }
`;

export const AuthDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    gap: 8px;
  }
`;
