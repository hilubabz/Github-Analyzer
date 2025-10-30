import type { FollowerFollowingType } from "@/services/FollowerFollowing.type";
import type { UserData } from "@/services/UserData.type";
import FollowerFollowingDialog from "./FollowerFollowingDialog";
import DialogBox from "./DialogBox";
import Repositories from "./Repositories";
import type { RepoType } from "@/services/repository.type";

const Profile = ({
  userData,
  followers,
  following,
  repos,
}: {
  userData: UserData;
  followers: FollowerFollowingType[];
  following: FollowerFollowingType[];
  repos: RepoType[];
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
        <DialogBox
          title="Repositories"
          value={userData?.public_repos}
          repo={true}
        >
          <Repositories data={repos} dialog={true} />
        </DialogBox>
        <FollowerFollowingDialog
          title="Followers"
          value={userData?.followers}
          data={followers}
        />
        <FollowerFollowingDialog
          title="Following"
          value={userData?.following}
          data={following}
        />
      </div>
    </div>
  );
};
export default Profile;
