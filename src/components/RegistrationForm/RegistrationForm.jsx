import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/operations"
import styles from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(register(values))
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.registrationForm} autoComplete='off'>
        <div className={styles.registrationFormWrap}>
          <label className={styles.registrationFormLable}>
            Username
            <Field
              className={styles.registrationFormFild}
              type='text'
              name='name'
            />
          </label>
          <label className={styles.registrationFormLable}>
            Email
            <Field
              className={styles.registrationFormFild}
              type='email'
              name='email'
            />
          </label>
          <label className={styles.registrationFormLable}>
            Password
            <Field
              className={styles.registrationFormFild}
              type='password'
              name='password'
            />
          </label>
        </div>
        <button className={styles.registrationBtn} type='submit'>
          Register
        </button>
      </Form>
    </Formik>
  )
}

export default RegistrationForm
