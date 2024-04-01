import { useDispatch, useSelector } from "react-redux"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"
import styles from "./Contacts.module.css"
import { fetchContacts } from "../../redux/contacts/operations"
import { useEffect } from "react"
import { selectFilteredContacts } from "../../redux/contacts/selectors"

const Contacts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(selectFilteredContacts)
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length === 0 ? <p>Contacts not find</p> : <ContactList />}
    </div>
  )
}

export default Contacts
