import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import s from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <div>
        <NavLink
          exact
          to="/"
          className={s.navLinks}
          activeClassName={s.navActiveLink}
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={s.navLinks}
            activeClassName={s.navActiveLink}
          >
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
