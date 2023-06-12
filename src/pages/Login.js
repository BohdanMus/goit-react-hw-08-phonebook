import { LoginForm } from 'components/LoginForm/LoginForm';
import { Link, Title } from './Login.styled';

const Login = () => {
  return (
    <div>
      <Title>Log In</Title>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
