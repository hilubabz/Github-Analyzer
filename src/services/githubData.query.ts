import axios from "axios";

export const githubData = async (username: string) => {
  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const res = await axios.get(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    },
  );
  return res.data;
};
