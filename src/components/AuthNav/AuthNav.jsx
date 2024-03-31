import clsx from "clsx"
import { NavLink } from "react-router-dom"
import styles from "./AuthNav.module.css"

// eslint-disable-next-line react-refresh/only-export-components
export const getClassLink = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.isActive)
}

const AuthNav = () => {
  return (
    <nav>
      <NavLink className={getClassLink} to='/register'>
        Register
      </NavLink>
      <NavLink className={getClassLink} to='/login'>
        Log In
      </NavLink>
    </nav>
  )
}

export default AuthNav
