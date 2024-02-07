import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { toast } from "sonner";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
("use client");

import { HiMail } from "react-icons/hi";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  const { singIn, googleLogin } = useAuth();
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
    <div className="bg-[url('https://i.ibb.co/TYwz4PW/pexels-burak-the-weekender-1098982.jpg')] pb-12 pt-4 rounded-b-lg mb-10 bg-cover">
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 hero-overlay bg-opacity-50 border-2  rounded-lg">
        <h2 className="text-4xl text-center font-semibold">
          Login you account
        </h2>
        <hr className="border-black my-8" />
        <form onSubmit={handleLogin} className="flex max-w-lg flex-col gap-4">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              rightIcon={HiMail}
              placeholder="Enter your email"
              required
              shadow
            />
            {mailError && (
              <span className="label-text text-red-400">{mailError}</span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
            {mailError && (
              <span className="label-text text-red-400">{mailError}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button gradientDuoTone="redToYellow" type="submit">
            Login
          </Button>
        </form>
        <hr className="border-black p-5 mt-5" />
        <div className="flex justify-center pb-5">
          <Button
            onClick={handleLoginWithGoogle}
            gradientDuoTone="pinkToOrange"
          >
            <FaGoogle className="mr-2 h-5 w-5" />
            Login With Google
          </Button>
        </div>
        <p className="text-center">
          Do not Have An Account ?
          <Link to="/register" className="text-red-600 font-bold pl-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
