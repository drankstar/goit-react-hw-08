import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"
import styles from "./UserMenu.module.css"

const UserMenu = () => {
  const dispatch = useDispatch()

  const user = useSelector(selectUser)

  return (
    <div className={styles.menuBox}>
      <p className={styles.text}>Welcome , {user.name} </p>
      <button
        className={styles.menuBtn}
        type='button'
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  )
}

export default UserMenu
