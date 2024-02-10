import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useaxiosSecure";

const useHr = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isHr, isPending: isHrLoading } = useQuery({
    queryKey: [user?.email, "isHr"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/Hr/${user.email}`);
      console.log(res.data);
      return res.data?.Hr;
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
