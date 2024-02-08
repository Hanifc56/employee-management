import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { Toaster } from "sonner";
import { updateProfile } from "firebase/auth";

import useAuth from "../../Hooks/useAuth";
("use client");

import { HiMail } from "react-icons/hi";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();

  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");
    const designation = form.get("designation");
    const account = form.get("account");
    const salary = form.get("salary");

    console.log(name, email, password, role, designation, account, salary);
    // get files from input and send them to imgbb
    const formData = new FormData();
    const imageInput = e.target.elements["photo"];
    const imageFile = imageInput.files[0];
    formData.append("image", imageFile);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    // send this url to db to store user data

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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        }) && navigate("/");
        // get user data
        updateProfile(result.user, {
          displayName: name,
          photoURL: res.data.data.display_url,
        })
          .then((currentUser) => {
            console.log(currentUser, "Profile Updated");
          })
          .catch((error) => {
            console.error(error);
          });
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
              placeholder="Enter your password"
              required
              shadow
            />
            {passError && (
              <span className="label-text text-red-400">{passError}</span>
            )}
          </div>
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
              <Label htmlFor="designation" value="Select your designation" />
            </div>
            <Select id="designation" name="designation" required>
              <option>Office Manager</option>
              <option>Administrative Assistant</option>
              <option>Executive Assistant</option>
              <option>Office Administrator</option>
              <option>Office Coordinator</option>
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Select your Role" />
            </div>
            <Select id="role" name="role" required>
              <option>Employee</option>
              <option>Hr</option>
              <option>Admin</option>
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="account" value="Your Account" />
            </div>
            <TextInput
              id="account"
              type="number"
              placeholder="Example 123456789"
              name="account"
              required
              shadow
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="salary" value="Select your Salary" />
            </div>
            <Select id="salary" name="salary" required>
              <option>30,000</option>
              <option>40,000</option>
              <option>45,000</option>
              <option>50,000</option>
              <option>60,000</option>
            </Select>
          </div>

          <div id="fileUpload" className="">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Upload photo" />
            </div>
            <FileInput
              id="file"
              name="photo"
              helperText="A profile picture is useful to confirm your are logged into your account"
              required
            />
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
