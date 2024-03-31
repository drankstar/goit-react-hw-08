import { Link } from "react-router-dom"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <h1 className={styles.title}>
      Welcom to <Link to='/contacts'> contacts book </Link> aplication
    </h1>
  )
}

export default Home
