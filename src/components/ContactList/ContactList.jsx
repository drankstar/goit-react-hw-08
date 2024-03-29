import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import { selectFilteredContacts } from "../../redux/contacts/slice"

import styles from "./ContactList.module.css"

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
