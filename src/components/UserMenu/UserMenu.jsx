import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations/operations';
import { selectAuthEmail } from 'redux/authOperations/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectAuthEmail);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
