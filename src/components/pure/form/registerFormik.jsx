import React from "react";
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

//Models

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    userName: Yup.string()
      .min(6, "Username too short")
      .max(12, "UserName too long")
      .required("UserName is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role is Required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must Match"),
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    console.log("Register User");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        //*** Yup Validation Schema ***
        validationSchema={registerSchema}
        //*** onSubmit Event ***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
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
            <label htmlFor="userName">User Name</label>
            <Field
              id="userName"
              type="text"
              name="userName"
              placeholder="Your UserName"
            />
            {/**UserName Errors */}
            {errors.userName && touched.userName && (
              <ErrorMessage component="div" name="userName" />
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="Example@email.com"
              type="email"
            />
            {/**Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage component="div" name="email" />
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/**Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage component="div" name="password" />
            )}
            <label htmlFor="confirm">Password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Confirm Password"
              type="password"
            />
            {/**Confirm Password  Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage component="div" name="confirm" />
            )}
            <button type="submit">Register Acount</button>
            {isSubmitting ? <p>Sendind your Credentials....</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
