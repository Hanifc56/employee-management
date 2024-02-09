import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useaxiosSecure";
("use client");

import { Button, Table } from "flowbite-react";
import {
  HiCheck,
  HiCurrencyDollar,
  HiExclamationCircle,
  HiXCircle,
} from "react-icons/hi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: employee = [], refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleVerifyUser = (employee) => {
    axiosSecure.patch(`/users/verifyUser/${employee._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${employee.name} is verified Now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div className="my-8">
        <h1 className="text-2xl font-semibold text-center ">
          All Employee: {employee.length}
        </h1>
      </div>

      <div className="overflow-x-auto md:px-8 py-8 ">
        <Table
          hoverable
          className="  outline outline-offset-4 outline-indigo-600 outline-1
           rounded-sm"
        >
          <Table.Head>
            <Table.HeadCell className="p-4 ">Idx</Table.HeadCell>
            <Table.HeadCell> name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>verified</Table.HeadCell>
            <Table.HeadCell>Bank ac</Table.HeadCell>
            <Table.HeadCell>salary</Table.HeadCell>
            <Table.HeadCell>Pay</Table.HeadCell>
            <Table.HeadCell>details</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y rounded-b-sm">
            {employee.map((employee, index) => (
              <Table.Row
                key={employee._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {employee.name}
                </Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
                <Table.Cell>
                  {employee?.status === "verified" ? (
                    <Button color="gray">
                      <HiCheck className=" h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleVerifyUser(employee)}
                      color="gray"
                    >
                      <HiXCircle className=" h-4 w-4" />
                    </Button>
                  )}
                </Table.Cell>
                <Table.Cell>{employee.account}</Table.Cell>
                <Table.Cell>{employee.salary}</Table.Cell>
                <Table.Cell>
                  <Button color="gray">
                    <HiCurrencyDollar className=" h-4 w-4" />
                    Pay
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`details/:${employee._id}`}>
                    <Button color="gray">
                      <HiExclamationCircle className=" h-4 w-4" />
                      Details
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default EmployeeList;
