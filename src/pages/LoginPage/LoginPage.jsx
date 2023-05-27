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
    console.log(email, password);
    dispatch(login({ email, password }));
    setPassword('');
    setEmail('');
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
