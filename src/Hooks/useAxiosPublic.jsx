import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://employee-management-server-nnu1.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
