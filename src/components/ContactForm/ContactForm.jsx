import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import styles from "./ContactForm.module.css"
import clsx from "clsx"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
})

const ContactForm = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          name: values.name,
          number: values.number,
        }
        dispatch(addContact(newContact))
        resetForm()
      }}
    >
      {({ errors, touched, values }) => (
        <Form className={styles.form}>
          <div className={styles.fildBox}>
            <label className={styles.label} htmlFor='name'>
              Name
            </label>
            <Field
              className={clsx(styles.fild, {
                [styles.error]: touched.name && errors.name,
              })}
              id='name'
              name='name'
              placeholder='Name'
            />
            {touched.name && errors.name && (
              <div className={styles.errorText}>{errors.name}</div>
            )}
          </div>

          <div className={styles.fildBox}>
            <label className={styles.label} htmlFor='number'>
              Number
            </label>
            <Field
              className={clsx(styles.fild, {
                [styles.error]: touched.number && errors.number,
              })}
              id='number'
              name='number'
              placeholder='Number'
            />
            {touched.number && errors.number && (
              <div className={styles.errorText}>{errors.number}</div>
            )}
          </div>
          <button
            className={styles.submitBtn}
            type='submit'
            disabled={!values.name || !values.number}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
