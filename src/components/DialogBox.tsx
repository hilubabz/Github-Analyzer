import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { FollowerFollowingType } from "@/services/FollowerFollowing.type";
import { ScrollArea } from "./ui/scroll-area";

const DialogBox = ({
  title,
  value,
  data,
}: {
  title: string;
  value: number;
  data: FollowerFollowingType[];
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "bg-card text-foreground duration-500 md:text-xl text-sm hover:bg-card cursor-pointer",
          )}
        >
          <span className="font-bold">{value}</span> {title}
        </Button>
      </DialogTrigger>
      <DialogContent
        className={cn("sm:max-w-[425px] max-h-[70vh] flex flex-col")}
      >
        <DialogHeader className={cn("shrink-0")}>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4" style={{ height: "45vh", minHeight: 200 }}>
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
