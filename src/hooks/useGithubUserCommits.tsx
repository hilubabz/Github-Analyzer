import { useQuery } from "@tanstack/react-query";
import { githubUserCommits } from "../services/githubUserCommits";

const useGithubUserCommits = (username: string) => {
  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["githubUserCommits"],
    queryFn: () => githubUserCommits(username),
    enabled: false,
  });
  return { data, isLoading, error, isError, refetch };
};

export default useGithubUserCommits;
