const { NavLink } = require('react-router-dom');

const ErrorPage = () => {
  return (
    <section>
      <p>
        Unfortunately there is no such page. Please proceed to the Home page if
        you want to continue
      </p>
      <NavLink to="/">Home</NavLink>
    </section>
  );
};

export default ErrorPage;
