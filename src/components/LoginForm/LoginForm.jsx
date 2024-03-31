import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations"
import styles from "./LoginForm.module.css"

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(login(values))
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.logimForm} autoComplete='off'>
        <div className={styles.loginWrap}>
          <label className={styles.label}>
            Email
            <Field className={styles.fild} type='email' name='email' />
          </label>
          <label>
            Password
            <Field className={styles.fild} type='password' name='password' />
          </label>
        </div>
        <button className={styles.loginBtn} type='submit'>
          Log In
        </button>
      </Form>
    </Formik>
  )
}

export default LoginForm
