import { useQuery } from "@tanstack/react-query";
import { githubUserData } from "../services/githubUserData";

const useGithubUserData = (username: string) => {
  const { data, isLoading, error, isFetching, isError, refetch } = useQuery({
    queryKey: ["githubUserData"],
    queryFn: () => githubUserData(username),
    enabled: false,
    retry: false,
  });
  return { data, isLoading, error, isFetching, isError, refetch };
};

export default useGithubUserData;
