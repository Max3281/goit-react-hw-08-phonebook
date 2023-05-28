import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
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
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  useEffect(() => {}, []);

  return (
    <section className="register-page-container">
      <form
        className="register-page-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className="register-page-label" htmlFor="name">
          Login
        </label>
        <input
          className="register-page-input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

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
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
