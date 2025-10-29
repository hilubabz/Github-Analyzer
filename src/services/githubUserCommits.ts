import axios from "axios";
import type { CommitType } from "./commitType";

export const githubUserCommits = async (username: string) => {
  const allEvents: CommitType[] = [];
  const perPage = 100;
  const maxPages = 20;

  for (let page = 1; page <= maxPages; page++) {
    const res = await axios.get(
      `https://api.github.com/users/${username}/events/public`,
      {
        params: { per_page: perPage, page },
      },
    );

    const data = res.data;
    if (data.length === 0) break;
    allEvents.push(...data);
  }

  return allEvents;
};
