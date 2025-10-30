import { useQuery } from "@tanstack/react-query";
import { githubFollowing } from "../services/githubFollowing";

const useGithubFollowing = (username: string) => {
  const { data, isLoading, isError, isFetching, error, refetch } = useQuery({
    queryKey: ["githubFollowing"],
    queryFn: () => githubFollowing(username),
    enabled: false,
    retry: false,
  });
  return { data, isLoading, isError, isFetching, error, refetch };
};

export default useGithubFollowing;
