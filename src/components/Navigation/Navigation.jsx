import { NavLink } from "react-router-dom"
import { getClassLink } from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav>
      <NavLink className={getClassLink} to='/'>
        Home
      </NavLink>{" "}
      {isLoggedIn && (
        <NavLink className={getClassLink} to='/contacts'>
          Contacts
        </NavLink>
      )}
    </nav>
  )
}
export default Navigation
