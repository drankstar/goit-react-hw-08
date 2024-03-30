import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import styles from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/selectors"

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <ul className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  )
}

export default ContactList
