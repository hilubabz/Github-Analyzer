import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import type { ReactElement } from "react";

const DialogBox = ({
  title,
  value,
  children,
  repo,
}: {
  title: string;
  value: number;
  children: ReactElement;
  repo: boolean;
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
        className={cn(
          "sm:max-w-[425px] max-h-[70vh] flex flex-col",
          repo ? "min-w-[50%]" : "",
        )}
      >
        <DialogHeader className={cn("shrink-0")}>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className={cn("mt-4 h-[45vh]")}>{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
