import { Form, Formik } from "formik"
import * as Yup from "yup"
import AccountQuestion from "./AccountQuestion"
import FormGroupInput from "./FormGroupInput"

export default function SignUnForm() {
  return (
    <section>
      <div>
        <header>
          <h1>Register your account</h1>
        </header>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .max(15, "Must contain 15 characters or less")
              .matches(/^[a-zA-Z]+$/, "Must contain only letters")
              .required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .max(20, "Must contain 20 characters or less")
              .min(6, "Must contain 6 characters or more")
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,20}$/,
                "Must contain at least one uppercase letter, one lowercase letter and one number"
              )
              .required("Required")
          })}
        >
          <Form className="form">
            <FormGroupInput
              type="username"
              label="Username"
              placeholder="example"
              required={true}
            />
            <FormGroupInput
              type="email"
              label="Email"
              placeholder="example@gmail.com"
              required={true}
            />
            <FormGroupInput
              type="password"
              label="Password"
              placeholder="example196"
              minLength={4}
              maxLength={15}
              required={true}
            />
            <input type="submit" value="Sign in" />
            <AccountQuestion question="¿Are you already registered?" href="" hrefText="Log in" />
          </Form>
        </Formik>
      </div>
    </section>
  )
}
