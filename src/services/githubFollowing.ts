import axios from "axios";

export const githubFollowing = async (username: string) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const res = await axios.get(
    `https://api.github.com/users/${username}/following`,
    {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    },
  );
  return res.data;
};
