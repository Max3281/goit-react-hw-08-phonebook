import React, { useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/authOperations/operations';
// import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { selectIsLoggedIn } from 'redux/authOperations/selectors';

const HomePage = lazy(() => import('../../pages/Homepage/Homepage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // let restrict = false;
  console.log(isLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <PrivateRoute path="contacts">
            <ContactsPage />
          </PrivateRoute> */}
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              !isLoggedIn ? <RegisterPage /> : <Navigate replace to="/" />
            }
          />
          <Route
            path="login"
            element={!isLoggedIn ? <LoginPage /> : <Navigate replace to="/" />}
          />

          <Route
            path="contacts"
            element={
              isLoggedIn ? <ContactsPage /> : <Navigate replace to="/" />
            }
          />
          <Route path="*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
