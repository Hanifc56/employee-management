import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useaxiosSecure";
("use client");

import { Button, Table, Card } from "flowbite-react";
import { HiBan, HiOutlineUserAdd } from "react-icons/hi";
import Swal from "sweetalert2";
import { useState } from "react";

const AllEmployeList = () => {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // make hr
  const handleMakeHr = (user) => {
    axiosSecure.patch(`/users/hr/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Hr Now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  // make a user admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  // delete a user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl font-semibold text-center ">
          All Employee: {users.length}
        </h1>
      </div>

      <div>
        <Button color="gray" className="mx-auto" onClick={toggleView}>
          {isGridView ? "Switch to Table View" : "Switch to Card Grid View"}
        </Button>
        {isGridView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {users.map((user) => (
              <Card key={user._id} className="max-w-sm">
                <div className="flex flex-col items-center pb-10">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </h5>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    {user.designation}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {user.role}
                  </span>
                  <div className="mt-4 flex md:space-x-3 lg:mt-6">
                    {user.role === "Hr" ? (
                      "HR"
                    ) : (
                      <Button onClick={() => handleMakeHr(user)} color="gray">
                        <HiOutlineUserAdd className=" h-4 w-4" />
                        HR
                      </Button>
                    )}
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <Button
                        className="mx-2"
                        onClick={() => handleMakeAdmin(user)}
                        color="gray"
                      >
                        <HiOutlineUserAdd className=" h-4 w-4" />
                        Admin
                      </Button>
                    )}
                    <Button onClick={() => handleDeleteUser(user)} color="red">
                      <HiBan className=" h-4 w-4" />
                      fire
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto md:px-8 py-8 ">
            <Table
              hoverable
              className="  outline outline-offset-4 outline-indigo-600 outline-1
           rounded-sm"
            >
              <Table.Head>
                <Table.HeadCell className="p-4 ">Idx</Table.HeadCell>
                <Table.HeadCell> name</Table.HeadCell>
                <Table.HeadCell>Designation</Table.HeadCell>
                <Table.HeadCell>role</Table.HeadCell>
                <Table.HeadCell>Make hr</Table.HeadCell>
                <Table.HeadCell>Make Admin</Table.HeadCell>
                <Table.HeadCell>Fire</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y rounded-b-sm">
                {users.map((user, index) => (
                  <Table.Row
                    key={user._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">{index + 1}</Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </Table.Cell>
                    <Table.Cell>{user.designation}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      {user.role === "Hr" ? (
                        "HR"
                      ) : (
                        <Button onClick={() => handleMakeHr(user)} color="gray">
                          <HiOutlineUserAdd className=" h-4 w-4" />
                        </Button>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <Button
                          onClick={() => handleMakeAdmin(user)}
                          color="gray"
                        >
                          <HiOutlineUserAdd className=" h-4 w-4" />
                        </Button>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => handleDeleteUser(user)}
                        color="red"
                      >
                        <HiBan className=" h-4 w-4" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEmployeList;
