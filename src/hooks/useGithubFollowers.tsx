import { useQuery } from "@tanstack/react-query";
import { githubFollowers } from "../services/githubFollowers";

const useGithubFollowers = (username: string) => {
  const { data, isLoading, isError, isFetching, error, refetch } = useQuery({
    queryKey: ["githubFollowers"],
    queryFn: () => githubFollowers(username),
    enabled: false,
    retry: false,
  });
  return { data, isLoading, isError, isFetching, error, refetch };
};

export default useGithubFollowers;
