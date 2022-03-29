// import Navigation from "components/Navigation/Navigation";
import {NavLink} from 'react-router-dom'
import s from "./AppBar.module.css"

export default function AppBar() {
   return(
      <header>
         <nav>
            <div>
               <NavLink exact to="/" 
                  className={s.navLinks} 
                  activeClassName={s.navActiveLink} >Home
               </NavLink>
               <NavLink to="/contacts" 
                  className={s.navLinks}
                  activeClassName={s.navActiveLink} >Contacts
               </NavLink>
            </div>

            <div>
               <NavLink to="/register" 
                  className={s.navLinks}
                  activeClassName={s.navActiveLink} >Register
               </NavLink>
               <NavLink to="/login" 
                  className={s.navLinks}
                  activeClassName={s.navActiveLink} >Login
               </NavLink>
            </div>

            <div className={s.userMenu}>
               <h3 className={s.userMenuEmail}>Email
               </h3>
               <NavLink to="/userMenu" 
                  className={s.navLinks}
                  activeClassName={s.navActiveLink} >Logout
               </NavLink>
            </div>

         </nav>
      </header>
   )
}