import { BellIcon, BellOff, Trash2, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { cn } from "@/components/lib/utils";
import { UpdateCallModal } from "@/components/modals/UpdateCallModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";
import dateFormat from "dateformat";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/Popover";
import { Separator } from "@/components/ui/Separator";
import { AlertModal } from "../modals/AlertModal";
type CardProps = React.ComponentProps<typeof Card>;

type ProfileProps = {
  id: string;
  name: string;
  category: string;
  lastcaughtup: string;
  notes: string;
  image: string;
  notification: boolean;
};

export function ProfileCard({ className, ...props }: CardProps & ProfileProps) {
  return (
    <Card className={cn("w-[380px] m-4", className)} {...props}>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.category}</CardDescription>
          </div>
          <div>
            {props.notification ? (
              <BellIcon className="cursor-pointer" />
            ) : (
              <Popover>
                <PopoverTrigger>
                  <SlidersHorizontal className="cursor-pointer w-4" />
                </PopoverTrigger>
                <PopoverContent className="w-12 h-24">
                  <BellOff className="cursor-pointer mb-2 w-4" />
                  <Separator />
                  <AlertModal
                    trigger={
                      <Trash2 className="cursor-pointer mt-2 w-4 text-red-600" />
                    }
                    title="Are you sure ?"
                    desc={`Do you wish to delete ${props.name}'s profile`}
                    button="Delete"
                    buttonType="destructive"
                    id={props.id}
                  />
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Image src={props.image} width="200" height="200" alt="animoji" />
        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {dateFormat(props.lastcaughtup, "fullDate")}
              </p>
              <p className="text-sm text-muted-foreground">
                {props.notes ? props.notes : "No notes"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <UpdateCallModal className="w-full" />
      </CardFooter>
    </Card>
  );
}
