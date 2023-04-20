import { useAuth } from 'hooks';
import css from './UserMenu.styled';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return;
  <div className={css.wrapper}>
    <p className={css.username}> Welcome, {user.name}</p>
    <button type="button" onClick={handleLogOut}>
      Logout
    </button>
  </div>;
};
