import { NavLink } from 'react-router-dom';
import css from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
