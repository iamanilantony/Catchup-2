import { Button, buttonVariants } from "../../components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "../../components/ui/Dialog";

import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { ProfileCard } from "../../components/cards/ProfileCard";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-9/12">
      <div className="flex justify-between w-full">
        <h1 className="text-center mb-6 text-2xl font-bold">
          Hello, Dashboard Page!
        </h1>
        <div className="flex flex-col">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Click Here</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add FollowUp</DialogTitle>
                <DialogDescription>Create your FollowUp</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {notifications.map((not) => (
          <ProfileCard />
        ))}
      </div>
    </div>
  );
}
