import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  const handleChange = e => {
    console.log(e.target);
  };

  return (
    <ul className="auth-navigation">
      <li>
        <NavLink to="register" className="auth-page" onClick={handleChange}>
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink to="login" className="auth-page">
          Login
        </NavLink>
      </li>
    </ul>
  );
};
