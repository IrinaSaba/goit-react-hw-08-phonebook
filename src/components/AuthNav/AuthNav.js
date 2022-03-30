import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      className={s.navLinks}
      activeClassName={s.navActiveLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={s.navLinks}
      activeClassName={s.navActiveLink}
    >
      Login
    </NavLink>
  </div>
);
export default AuthNav;
