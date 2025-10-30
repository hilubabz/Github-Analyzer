import type { FollowerFollowingType } from "@/services/FollowerFollowing.type";
import DialogBox from "./DialogBox";
import type { UserData } from "@/services/UserData.type";

const Profile = ({
  userData,
  followers,
  following,
}: {
  userData: UserData;
  followers: FollowerFollowingType[];
  following: FollowerFollowingType[];
}) => {
  return (
    <div className=" bg-card shadow-lg rounded-xl p-7 transition-all duration-500">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 shrink-0">
        <div className="h-[150px] w-[150px] rounded-full overflow-hidden shrink-0">
          <img
            src={userData?.avatar_url}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-2 text-center">
          <a
            href={userData?.html_url}
            target="_blank"
            className="font-semibold text-2xl"
          >
            {userData?.name}
          </a>
          <div>@{userData?.login}</div>
          <div className="line-clamp-2 text-sm">
            {userData?.bio} | {userData?.location}
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center pt-7 text-lg">
        <div>
          <span className="font-bold">{userData?.public_repos}</span>{" "}
          Repositories
        </div>
        <DialogBox
          title="Followers"
          value={userData?.followers}
          data={followers}
        >
          {/* <span className="font-bold">{userData?.followers}</span> Followers */}
        </DialogBox>
        <div>
          {/* <span className="font-bold">{userData?.following}</span> Following */}
          <DialogBox
            title="Following"
            value={userData?.following}
            data={following}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
