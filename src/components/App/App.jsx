import React, { useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/authOperations/operations';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/authOperations/selectors';

import PrivateRoute from 'components/Routes/PrivateRoute';
import RestrictedRoute from 'components/Routes/RestrictedRoute';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/Homepage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <p>...Loading. Please, wait.</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                !isLoggedIn ? <RegisterPage /> : <Navigate replace to="/" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />

            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/" component={<ContactsPage />} />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
