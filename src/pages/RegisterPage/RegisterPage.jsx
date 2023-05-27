import { useState } from 'react';
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
    console.log(name, email, password);
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">Login</label>
        <input type="text" name="name" value={name} onChange={handleChange} />

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

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterPage;
