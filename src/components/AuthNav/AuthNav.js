import { AuthDiv, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthDiv>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthDiv>
  );
};
