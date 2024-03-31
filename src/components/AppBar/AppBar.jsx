import { useSelector } from "react-redux"
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import styles from "./AppBar.module.css"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)

  return (
    <header>
      <div className={styles.box}>
        <Navigation />
        {!isRefreshing && <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
      </div>
    </header>
  )
}

export default AppBar
