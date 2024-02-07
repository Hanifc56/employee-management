import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { toast } from "sonner";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { singIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  console.log("loaction form login page", location);
  const navigate = useNavigate();
  const [mailError, setMailError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // clear the feild
    setMailError("");

    // Login With email and password
    singIn(email, password)
      .then((result) => {
        console.log(result);

        // navigate user after login
        toast.success("login Successful") &&
          navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setMailError(error.message);
        toast.error("Invalid Mail or Password");
      });
  };
  const handleLoginWithGoogle = () => {
    //   login with google
    googleLogin()
      .then((result) => {
        console.log(result);
        // navigate to the disired loaction
        toast.success("Login Successful!") &&
          navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/0qH0J7g/pexels-pixabay-271639.jpg')] pb-12 pt-4 rounded-b-lg mb-10 bg-cover">
      <Navbar></Navbar>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 hero-overlay bg-opacity-50 border-2  rounded-lg">
        <h2 className="text-4xl text-center font-semibold">
          Login you account
        </h2>
        <hr className="border-black my-8" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter you email"
              name="email"
              className="input input-bordered
              bg-transparent"
              required
            />
            {mailError && (
              <span className="label-text text-red-400">{mailError}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered
              bg-transparent"
              required
            />
            {mailError && (
              <span className="label-text text-red-400">{mailError}</span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline bg-transparent  ">Login</button>
          </div>
        </form>
        <hr className="border-black pb-5" />
        <div className="flex justify-center pb-5">
          <button
            onClick={handleLoginWithGoogle}
            className="btn btn-outline bg-transparent w-3/4
            text-blue-700"
          >
            <FaGoogle></FaGoogle> Login With Google
          </button>
        </div>
        <p className="text-center">
          Do not Have An Account ?
          <Link to="/register" className="text-green-400 font-bold pl-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
