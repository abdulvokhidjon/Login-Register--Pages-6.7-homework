import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../components/FormInput";

// react import
import { useEffect } from "react";

//action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
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
        <Form method="post" className="flex flex-col gap-5 w-96 bg-base-100 shadow-xl p-8">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <FormInput name="email" type="email" label="Email" />
          <FormInput name="password" type="password" label="Password" />
          <div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
          <div className="w-full">
            <button type="button" className="btn btn-secondary btn-block">
              Google
            </button>
          </div>
          <div className="text-center">
            <p className="text-slate-500">
              If you don't have an account,
              <Link className="link link-primary" to="/register">
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
