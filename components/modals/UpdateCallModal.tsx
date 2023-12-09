"use client";

import { Button } from "@/components/ui/Button";
import { CheckIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/Dialog";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

type UpdateCallModalProps = {
  className?: string;
};

export const UpdateCallModal = ({ className }: UpdateCallModalProps) => {
  const [dateTime, setDateTime] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const handleDateTimeChange = (event: any) => {
    const value = event.target.value;
    setDateTime(value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <Button>
          <CheckIcon className="mr-2" />
          <span>Update Last Call</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add FollowUp</DialogTitle>
          <DialogDescription>Create your FollowUp</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Select Date
            </Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Notes
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
