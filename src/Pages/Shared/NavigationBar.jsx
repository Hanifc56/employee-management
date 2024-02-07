"use client";

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import Swal from "sweetalert2";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  const userPhotoURL = user && user.photoURL ? user.photoURL : "";

  const navlinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: " Success!",
          text: "LogOut succefully!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Navbar fluid rounded className=" bg-gray-100 hero-overlay bg-opacity-50  ">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://i.ibb.co/yhWQmrL/Employe.jpg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Employee Management
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Button
            onClick={handleLogOut}
            className="mx-2"
            pill
            outline
            gradientDuoTone="purpleToBlue"
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              className="mx-2"
              pill
              outline
              gradientDuoTone="purpleToBlue"
            >
              Login
            </Button>
          </Link>
        )}
        {/* <div className="w-10 rounded-full">
          <img alt="User Image" src={user.photoURL} />
        </div> */}
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={userPhotoURL} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">User</span>
            <span className="block truncate text-sm font-medium">
              {user ? user.displayName : "User name"}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            {user ? (
              <Button
                onClick={handleLogOut}
                className="mx-2"
                pill
                outline
                gradientDuoTone="purpleToBlue"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  className="mx-2"
                  pill
                  outline
                  gradientDuoTone="purpleToBlue"
                >
                  Login
                </Button>
              </Link>
            )}
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>{navlinks}</Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
