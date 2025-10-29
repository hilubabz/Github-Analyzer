import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState, type FormEvent } from "react";
import PieChartComponent from "./charts/PieChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import ChartSkeleton from "./components/ChartSkeleton";
import useGithubData from "./hooks/useGithubData";
import useGithubUserData from "./hooks/useGithubUserData";
import useGithubUserCommits from "./hooks/useGithubUserCommits";
import ProfileSkeleton from "./components/ProfileSkeleton";
import RepositoriesSkeleton from "./components/RepositorySkeleton";
import Profile from "./components/Profile";
import LineChartComponent from "./charts/LineChartComponent";
import Repositories from "./components/Repositories";
import { useQueryClient } from "@tanstack/react-query";
const App = () => {
  const [query, setQuery] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const repos = useGithubData(query);
  const userData = useGithubUserData(query);
  const userCommits = useGithubUserCommits(query);
  const queryClient = useQueryClient();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setActive(false);
    queryClient.resetQueries({ queryKey: ["githubUserData"] });
    queryClient.resetQueries({ queryKey: ["githubUserCommits"] });
    queryClient.resetQueries({ queryKey: ["githubData"] });
    repos.refetch();
    userData.refetch();
    userCommits.refetch();
    setQuery("");
    // console.log('Success')
  };
  // console.log(data)
  // console.log(userData.data);
  // console.log(userCommits)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div
      className={`px-5 lg:px-10 pt-10 min-h-screen bg-(--bg) text-(--text) transition-all duration-500 ease-in-out pb-2 max-w-[100vw]`}
    >
      <div
        className={`flex justify-between p-5 shadow-lg rounded-xl items-center bg-(--card)`}
      >
        <div className="flex gap:10 md:gap-30 w-[75%] items-center">
          <div className="font-semibold text-sm md:text-xl">Repo Analyzer</div>
          <div className="flex gap-2 w-[70%] items-center border-gray-300 border p-2 rounded-xl">
            <CiSearch />
            <form onSubmit={(e) => handleSubmit(e)} className="w-full">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0 text-sm md:text-lg"
                placeholder="Enter GitHub username..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="lg:flex items-center text-3xl gap-2 hidden ">
          {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
          <div
            className={`relative w-14 h-7 ${darkMode ? "bg-white" : "bg-gray-400"} rounded-full cursor-pointer transition-all duration-500`}
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <div
              className={`absolute top-0.5 ${darkMode ? "left-[95%] -translate-x-[95%] bg-gray-400" : "left-0.5 bg-white"} w-6 h-6 rounded-full transition-all duration-500`}
            ></div>
          </div>
        </div>
        <div
          className="lg:hidden h-10 w-10 flex items-center justify-center text-2xl bg-(--bg) text-(--text) shadow-lg rounded-2xl"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </div>
      </div>
      {userData.isFetching && repos.isFetching && userCommits.isFetching ? (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-[100vw] gap-4">
          <div className="space-y-4">
            <ProfileSkeleton />
            <ChartSkeleton title="Top Languages" />
            <ChartSkeleton title="Recent Commits" />
          </div>
          <div className="space-y-4">
            <RepositoriesSkeleton />
            <ChartSkeleton title="Most Starred Repositories" />
          </div>
        </div>
      ) : active ? (
        <></>
      ) : userData.data === undefined ? (
        <div className=" text-center pt-10 text-2xl font-semibold text-red-500">
          No data found
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 max-w-[100vw] gap-4">
          <div className="space-y-4">
            <Profile userData={userData.data} />
            <div className="hidden md:block space-y-4">
              <PieChartComponent data={repos.data ?? []} />

              <LineChartComponent data={userCommits.data ?? []} />
            </div>
          </div>
          <div className="space-y-4">
            <Repositories data={repos.data ?? []} />

            <BarChartComponent repos={repos.data ?? []} />

            <div className="block md:hidden space-y-4">
              <PieChartComponent data={repos.data ?? []} />

              <LineChartComponent data={userCommits.data ?? []} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
