import { IoMdPerson } from "react-icons/io"
import { FaPhone } from "react-icons/fa"
import styles from "./Contact.module.css"
import { useDispatch } from "react-redux"
import { deleteContacts } from "../../redux/contacts/operations"

const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(deleteContacts(contact.id))
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.info}>
        <div className={styles.row}>
          <IoMdPerson />
          {contact.name}
        </div>
        <div className={styles.row}>
          <FaPhone />
          {contact.number}
        </div>
      </div>
      <button className={styles.deletBtn} onClick={onDelete}>
        Delet
      </button>
    </li>
  )
}

export default Contact
