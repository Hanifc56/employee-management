import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { Toaster, toast } from "sonner";
import { updateProfile } from "firebase/auth";

import useAuth from "../../Hooks/useAuth";
("use client");

import { HiMail } from "react-icons/hi";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useAuth();

  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setPassError("Password should be more then 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPassError("Password should contain atleast one Uppercase Character");
      return;
    } else if (!/[#?!@$%^&*\\-_]/.test(password)) {
      setPassError("Password must contain a spcail charecture like: @#$%");
      return;
    }
    // reset Error message
    setPassError("");
    // create User

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // get user data
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then((currentUser) => {
            console.log(currentUser, "Profile Updated");
          })
          .catch((error) => {
            console.error(error);
          });

        Swal.fire(
          {
            title: " succefully!",
            text: "User created succefully!",
            icon: "success",
          } && navigate("/")
        );
      })
      .catch((error) => {
        console.error(error);
        setPassError(error.message);
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/cy28rBB/pexels-mohammad-danish-891059.jpg')] pb-12 pt-4 rounded-b-lg mb-10 bg-cover">
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8  rounded-lg bg-gray-100 hero-overlay bg-opacity-50 border-2">
        <h2 className="text-4xl text-center font-semibold">
          Register you account
        </h2>
        <hr className="bg-black my-8" />
        <form
          onSubmit={handleRegister}
          className="flex max-w-lg flex-col gap-4"
        >
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter you name"
              name="name"
              required
              shadow
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Photo URL" />
            </div>
            <TextInput
              id="photo"
              type="text"
              placeholder="Enter you photo URl"
              name="photo"
              required
              shadow
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your Email" />
            </div>
            <TextInput
              id="email2"
              name="email"
              type="email"
              rightIcon={HiMail}
              placeholder="Enter your email"
              required
              shadow
            />
            {passError && (
              <span className="label-text text-red-400">{passError}</span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your Password" />
            </div>
            <TextInput
              id="password2"
              name="password"
              type="password"
              required
              shadow
            />
            {passError && (
              <span className="label-text text-red-400">{passError}</span>
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
          <Toaster position="top-right"></Toaster>
          <Button gradientDuoTone="redToYellow" type="submit">
            Register
          </Button>
        </form>
        <p className="text-center">
          Already Have An Account ?
          <Link to="/login" className="text-[#F75B5F] font-bold pl-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
