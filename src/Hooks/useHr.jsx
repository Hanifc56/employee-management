import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useaxiosSecure";
import useAuth from "./useAuth";

const useHr = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isHr, isPending: isHrLoading } = useQuery({
    queryKey: [user?.email, "isHr"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/hr/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isHr, isHrLoading];
};

export default useHr;
