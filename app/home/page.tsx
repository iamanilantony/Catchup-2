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

const users = [
  {
    name: "Anil Antony",
    category: "Family",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char1/expr1.webp",
    notification: true
  },
  {
    name: "Shruthi",
    category: "Family",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char2/expr1.webp",
    notification: false
  },
  {
    name: "Vinay Kumar",
    category: "Work",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char3/expr1.webp",
    notification: false
  },
  {
    name: "Ajay Babu",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char1/expr1.webp",
    notification: false
  },
  {
    name: "Avinash Toppo",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char2/expr2.webp",
    notification: true
  },
  {
    name: "Shubham Shinde",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char3/expr3.webp",
    notification: true
  },
  {
    name: "Arjun Sineed",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char1/expr1.webp",
    notification: true
  },
  {
    name: "Aadil Shah",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char2/expr1.webp",
    notification: true
  },
  {
    name: "Vaishnav",
    category: "Friends",
    lastCaughtUp: "2 weeks Ago",
    notes: "remind about the trip",
    image: "/char3/expr1.webp",
    notification: true
  }
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-9/12 mt-6 mb-6">
      <div className="flex justify-between w-full mb-8 mt-4">
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
        {users.map((user) => (
          <div className="mb-4">
            <ProfileCard
              name={user.name}
              category={user.category}
              lastCaughtUp={user.lastCaughtUp}
              notes={user.notes}
              image={user.image}
              notification={user.notification}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
