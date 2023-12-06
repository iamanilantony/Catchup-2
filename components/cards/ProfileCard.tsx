import { BellIcon, CheckIcon, BellOff } from "lucide-react";

import Image from "next/image";
import { cn } from "../lib/utils";
import { Button } from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/Card";
import { Switch } from "../ui/Switch";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  }
];

type CardProps = React.ComponentProps<typeof Card>;

type ProfileProps = {
  name: String;
  category: String;
  lastCaughtUp: String;
  notes: String;
};

export function ProfileCard({ className, ...props }: CardProps & ProfileProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <CardTitle>{props.name}</CardTitle>
            <CardDescription>{props.category}</CardDescription>
          </div>
          <div>
            <BellIcon className="cursor-pointer" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Image
          src={"/char1/expr1.webp"}
          width="200"
          height="200"
          alt="animoji"
        />

        <div>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {props.lastCaughtUp}
              </p>
              <p className="text-sm text-muted-foreground">{props.notes}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
            >
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          Update Last call
        </Button>
      </CardFooter>
    </Card>
  );
}
