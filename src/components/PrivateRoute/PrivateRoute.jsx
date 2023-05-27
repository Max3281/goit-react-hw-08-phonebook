import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authOperations/selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Route {...routeProps}>{isLoggedIn ? children : redirect('/')}</Route>;
};

export default PrivateRoute;
