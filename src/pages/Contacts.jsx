import { useSelector } from "react-redux"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import styles from "./Contacts.module.css"
import { selectFilteredContacts } from "../redux/contacts/slice"
const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts)
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length === 0 ? <p>Add your first contact</p> : <SearchBox />}
      <ContactList />
    </div>
  )
}

export default Contacts
