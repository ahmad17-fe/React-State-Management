import { useQuery } from "react-query";
import axios from "axios";

const getPosts = async () => {
  const URL = process.env.REACT_APP_API_BASE_URL;
  try {
    const res = await axios.get(`${URL}/posts`);

    return res.data;
  } catch (error) {
    throw new Error("Fetching Error");
  }
};

const usePosts = () => {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    "posts",
    getPosts,
    {
      staleTime: 3000,
      refetchInterval: 5000,
    }
  );

  return { data, isError, isLoading, isFetching, isSuccess };
};

export default usePosts;
