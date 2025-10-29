import { useQuery } from "@tanstack/react-query";
import { githubUserCommits } from "../services/githubUserCommits";

const useGithubUserCommits = (username: string) => {
  const { data, isLoading, isFetching, error, isError, refetch } = useQuery({
    queryKey: ["githubUserCommits"],
    queryFn: () => githubUserCommits(username),
    enabled: false,
    retry: false,
  });
  return { data, isLoading, isFetching, error, isError, refetch };
};

export default useGithubUserCommits;
