import { nanoid } from "nanoid"
import styles from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filters/slice"
import { selectFilteredName } from "../../redux/filters/selectors"

const id = nanoid()

const SearchBox = () => {
  const dispatch = useDispatch()
  const name = useSelector(selectFilteredName)

  const onSearch = (evt) => {
    const { value } = evt.target
    dispatch(changeFilter(value))
  }

  return (
    <div className={styles.inputBox}>
      <label className={styles.label} htmlFor={id}>
        Find contacts by name
      </label>
      <input
        className={styles.fild}
        id={id}
        type='text'
        value={name}
        onChange={onSearch}
      />
    </div>
  )
}

export default SearchBox
