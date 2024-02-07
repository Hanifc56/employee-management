import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

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

        toast.success("User Created Successfully") && navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setPassError(error.message);
      });
  };
  return (
    <div className="bg-[url('https://i.ibb.co/9vXV7nV/pexels-engin-akyurt-1579253.jpg')] pb-12 pt-4 rounded-b-lg mb-10 bg-cover">
      <Navbar></Navbar>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8  rounded-lg bg-gray-100 hero-overlay bg-opacity-50 border-2">
        <h2 className="text-4xl text-center font-semibold">
          Register you account
        </h2>
        <hr className="bg-black my-8" />
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter you name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter you photo URl"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter you email"
              name="email"
              className="input input-bordered
               "
              required
            />
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
              "
              required
            />
            {passError && (
              <span className="label-text text-red-400">{passError}</span>
            )}
            <div className="flex mt-2">
              <label className="label cursor-default ">
                <input type="checkbox" className="checkbox my- items-center" />
                <span className="label-text pl-2">
                  Accept Term & Conditions
                </span>
              </label>
            </div>
          </div>
          <div className="form-control mt-6">
            <Toaster position="top-right"></Toaster>
            <button className="btn btn-outline bg-transparent">Register</button>
          </div>
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
