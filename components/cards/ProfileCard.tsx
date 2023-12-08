import { BellIcon, BellOff } from "lucide-react";

import Image from "next/image";
import { cn } from "@/components/lib/utils";
import { UpdateCallModal } from "@/components/modals/UpdateCallModal";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/Card";

type CardProps = React.ComponentProps<typeof Card>;

type ProfileProps = {
  name: string;
  category: string;
  lastCaughtUp: string;
  notes: string;
  image: string;
  notification: boolean;
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
            {props.notification ? (
              <BellIcon className="cursor-pointer" />
            ) : (
              <BellOff className="cursor-pointer" />
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
                {props.lastCaughtUp}
              </p>
              <p className="text-sm text-muted-foreground">{props.notes}</p>
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
