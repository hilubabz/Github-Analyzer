import { useQuery } from "@tanstack/react-query";
import { githubData } from "../services/githubData.query";

const useGithubData = (username: string) => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["githubData"],
    queryFn: () => githubData(username),
    enabled: false,
  });
  return { data, isLoading, error, isError, refetch };
};

export default useGithubData;
