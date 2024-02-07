"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const navlinks = (
    <>
      <NavLink to="/">
        <Navbar.Link>Home</Navbar.Link>
      </NavLink>
      <NavLink to="/dashboard">
        <Navbar.Link>Dashboard</Navbar.Link>
      </NavLink>
      <NavLink to="/services">
        <Navbar.Link>Services</Navbar.Link>
      </NavLink>
      <NavLink to="/contact">
        <Navbar.Link>Contact</Navbar.Link>
      </NavLink>
    </>
  );
  return (
    <Navbar fluid rounded>
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
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">User</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>{navlinks}</Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
