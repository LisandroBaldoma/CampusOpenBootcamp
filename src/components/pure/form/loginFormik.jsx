import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        //***Initial values that the form will take***
        initialValues={initialCredentials}
        //*** Yup Validation Schema ***
        validationSchema={loginSchema}
        //*** onSubmit Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          /*We saved in de localStorage of navigator*/
          localStorage.setItem("credentials", values);
        }}
      >
        {/**We obtain props from Formik */}

        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="emial"
              type="email"
              name="email"
              placeholder="example@email.com"
            />
            {/**Email Errors */}
            {errors.email && touched.email && (
              <div className="error">
              <ErrorMessage component="div" name="email" />
              </div>
            )}

            <label htmlFor="email">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />

            {/**Email Errors */}
            {errors.password && touched.password && (
                <div className="error">
                <ErrorMessage component="div" name="password" />
              </div>
            )}

            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your Credentials....</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
