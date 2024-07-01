// rrd imports
import { Form, Link, useActionData } from "react-router-dom";
// components
import FormInput from "../components/FormInput";
// react imports
import { useEffect, useState } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, photoURL, email, password };
};

function Register() {
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  return (
    <div className="auth-container">
      <div className="auth-left"></div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-8"
        >
          <h1 className="text-3xl font-semibold text-center">Register</h1>
          <FormInput name="displayName" type="text" label="Your Name" />
          <FormInput name="photoURL" type="url" label="Your Image URL" />
          <FormInput name="email" type="email" label="Email" />
          <FormInput name="password" type="password" label="Password" />
          <div className="mt-6">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
          <div className="w-full">
            <button type="button" className="btn btn-secondary btn-block">
              Google
            </button>
          </div>
          <div className="text-center">
            <p className="text-slate-500">
              If you have an account,
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
