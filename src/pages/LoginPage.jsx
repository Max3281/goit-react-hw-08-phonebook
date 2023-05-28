import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authOperations/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setPassword('');
    setEmail('');
  };

  return (
    <section className="register-page-container">
      <form
        className="register-page-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className="register-page-label" htmlFor="email">
          Email
        </label>
        <input
          className="register-page-input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label className="register-page-label" htmlFor="password">
          Password
        </label>
        <input
          className="register-page-input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="register-button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
