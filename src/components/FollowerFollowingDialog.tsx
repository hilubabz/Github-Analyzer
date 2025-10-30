import type { FollowerFollowingType } from "@/services/FollowerFollowing.type";
import DialogBox from "./DialogBox";

const FollowerFollowingDialog = ({
  title,
  value,
  data,
}: {
  title: string;
  value: number;
  data: FollowerFollowingType[];
}) => {
  return (
    <DialogBox title={title} value={value} repo={false}>
      <div className="space-y-5">
        {data.map((val) => (
          <div key={val?.login} className="flex items-center space-x-4">
            <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
              <img
                src={val?.avatar_url}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <a
              href={val?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline"
            >
              {val?.login}
            </a>
          </div>
        ))}
      </div>
    </DialogBox>
  );
};

export default FollowerFollowingDialog;
