import { NavLink } from "react-router-dom"
import { getClassLink } from "../AuthNav/AuthNav"

const Navigation = () => {
  return (
    <nav>
      <NavLink className={getClassLink} to='/'>
        Home
      </NavLink>
    </nav>
  )
}
export default Navigation
