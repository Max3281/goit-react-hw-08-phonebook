import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authOperations/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section className="home-page-container">
      <h1 className="home-page-text">Welcome to the Home page. </h1>
      {isLoggedIn ? (
        <p className="home-page-text">
          Now, you have a full access to your contacts page.
        </p>
      ) : (
        <p className="home-page-text">
          Please, login or register to have an access to contacts page.
        </p>
      )}
    </section>
  );
};

export default HomePage;
