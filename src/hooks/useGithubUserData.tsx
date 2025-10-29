import { useQuery } from "@tanstack/react-query";
import { githubUserData } from "../services/githubUserData";

const useGithubUserData = (username: string) => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["githubUserData"],
    queryFn: () => githubUserData(username),
    enabled: false,
  });
  return { data, isLoading, error, isError, refetch };
};

export default useGithubUserData;
