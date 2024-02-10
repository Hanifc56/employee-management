import {
  Button,
  Datepicker,
  Label,
  Select,
  Table,
  TextInput,
} from "flowbite-react";
import useAxiosSecure from "../../../Hooks/useaxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();

  const { data: works = [], refetch } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const res = await axiosSecure.get("/workSheet");
      return res.data;
    },
  });

  const handleWorkSheet = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const task = form.get("task");
    const work = form.get("work");
    const date = form.get("date");
    console.log(task, work, date);
    const workInfo = {
      task: task,
      work: work,
      date: date,
    };
    console.log(workInfo);
    await axiosSecure.post("/workSheet", workInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data stored to database",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="py-8 font-semibold text-2xl text-center">Work-Sheet</h1>
      </div>
      <div className="lg:w-1/2 md:w-3/4 mx-auto p-8 bg-gray-100 hero-overlay bg-opacity-50 border-2  rounded-lg">
        <hr className="border-black my-8" />
        <form
          onSubmit={handleWorkSheet}
          className="flex max-w-lg flex-col gap-4"
        >
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="task" value="Select your Task" />
            </div>
            <Select id="task" name="task" required>
              <option>Sales</option>
              <option>Support</option>
              <option>Content</option>
              <option>Paper Work</option>
            </Select>
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="Num" value="Hour Worked" />
            </div>
            <TextInput
              id="Num"
              type="number"
              name="work"
              placeholder="Work hour"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Pick A date" />
              <Datepicker name="date" />
            </div>
          </div>

          <Button color="red" type="submit">
            Submit
          </Button>
        </form>
        <hr className="border-black p-5 mt-5" />
      </div>
      <div className="overflow-x-auto md:px-8 py-8 ">
        <Table
          hoverable
          className="  outline outline-offset-4 outline-indigo-600 outline-1
           rounded-sm"
        >
          <Table.Head>
            <Table.HeadCell className="p-4 ">Idx</Table.HeadCell>
            <Table.HeadCell> Task</Table.HeadCell>
            <Table.HeadCell>Hours Worked</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y rounded-b-sm">
            {works.map((work, index) => (
              <Table.Row
                key={work._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">{index + 1}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {work.task}
                </Table.Cell>
                <Table.Cell>{work.work}</Table.Cell>
                <Table.Cell>{work.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default WorkSheet;
