import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Background from "./Shared/Background";
import img from "../assets/img2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // Email and password signIn
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    const form = e.target;
    const email = form.email.value; // Access email input by name
    const password = form.password.value; // Access password input by name

    try {
      const result = await signIn(email, password);
      console.log(result);
      toast.success("SignIn Successful");
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // googleSignIn
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      toast.success("SignIn Successful");
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div>
      <Background />
      <Helmet>
        <title>StudyPals | Login</title>
      </Helmet>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden my-12  bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl rounded-3xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 ">
          <form onSubmit={handleSignIn} className="w-full max-w-md">
            <div className="flex justify-center mx-auto"></div>

            <div className="flex items-center justify-center mt-6">
              <Link
                to="/login"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
              >
                sign in
              </Link>
              <Link
                to="/signup"
                className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              >
                sign up
              </Link>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              {/* Add name="email" here */}
              <input
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              {/* Add name="password" here */}
              <input
                type="password"
                name="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

         

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
             <div>
              <h3 className="text-center py-5 text-lg text-[#]">Or Login With</h3>
              <div className="flex justify-center pb-5 items-center gap-5">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center gap-1 btn bg-[#FAF4E4] text-lg"
                >
                  <FcGoogle />
                  Google
                </button>
              </div>
            </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
