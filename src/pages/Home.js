import { Title, UnderTitle, HomeLink } from './Home.styled';

const Home = () => {
  return (
    <section>
      <Title>Welcome to Phonebook!</Title>
      <UnderTitle>
        Please
        <HomeLink to="/register">Register</HomeLink>
        or
        <HomeLink to="/login">Log in</HomeLink>
        to be able to use your PhoneBook
      </UnderTitle>
    </section>
  );
};

export default Home;
