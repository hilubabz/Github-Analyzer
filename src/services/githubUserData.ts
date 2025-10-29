import axios from "axios";

// const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
export const githubUserData = async (username: string) => {
  const res = await axios.get(
    `https://api.github.com/users/${encodeURIComponent(username)}`,
  );
  return res.data;
};
