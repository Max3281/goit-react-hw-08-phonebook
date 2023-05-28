import { AuthNavigation } from 'components/Navigation/AuthNavigation';
import { UserMenu } from 'components/Navigation/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authOperations/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="app-header">
      <NavLink to="/" className="app-headerNav">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="contacts" className="app-headerNav">
          Contacts
        </NavLink>
      )}
      {!isLoggedIn ? (
        <AuthNavigation className="app-headerNav" />
      ) : (
        <UserMenu className="app-headerNav" />
      )}
    </header>
  );
};

export default Navigation;
