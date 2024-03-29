// import ContactForm from "./components/ContactForm/ContactForm"
// import ContactList from "./components/ContactList/ContactList"
// import SearchBox from "./components/SearchBox/SearchBox"
// import styles from "./App.module.css"
// import { useSelector } from "react-redux"
// import { selectContacts } from "./redux/contacts/slice"
// import { useEffect } from "react"
// import { useDispatch } from "react-redux"
// import { fetchContacts } from "./redux/contacts/operations"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import LoginForm from "./components/LoginForm/LoginForm"
import Contacts from "./pages/Contacts"
import { RestrictedRoute } from "./RestrictedRoute"

function App() {
  // const dispatch = useDispatch()
  // const contacts = useSelector(selectContacts)

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path='/' />
        <Route
          path='/register'
          element={
            <RestrictedRoute
              component={<RegistrationForm />}
              redirectTo='/contacts'
            />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute component={<LoginForm />} redirectTo='/contacts' />
          }
        />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Layout>
  )
}

export default App
