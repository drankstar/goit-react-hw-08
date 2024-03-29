import { nanoid } from "nanoid"
import styles from "./SearchBox.module.css"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filters/slice"

const id = nanoid()

const SearchBox = () => {
  const dispatch = useDispatch()
  const name = useSelector(selectNameFilter)

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
