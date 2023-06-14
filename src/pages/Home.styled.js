import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 8px;
  padding: 5px 8px;
  background-color: #239b56;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;
export const UnderTitle = styled.h2`
  color: black;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;
