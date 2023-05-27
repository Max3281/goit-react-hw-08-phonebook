import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authOperations/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      {!isLoggedIn ? <AuthNavigation /> : <UserMenu />}
    </header>
  );
};

export default Navigation;
