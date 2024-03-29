import { NavLink } from "react-router-dom"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors"
import { useSelector } from "react-redux"

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>

      {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </nav>
  )
}
export default Navigation
