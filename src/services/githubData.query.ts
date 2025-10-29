import axios from "axios";

export const githubData = async (username: string) => {
  const res = await axios.get(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`,
  );
  return res.data;
};
