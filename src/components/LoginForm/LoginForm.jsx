import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { login } from "../../redux/auth/operations"

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
      <Form autoComplete='off'>
        <label>
          Email
          <Field type='email' name='email' />
        </label>
        <label>
          Password
          <Field type='password' name='password' />
        </label>
        <button type='submit'>Log In</button>
      </Form>
    </Formik>
  )
}

export default LoginForm
