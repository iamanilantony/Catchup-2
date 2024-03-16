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
import { Calendar } from "@/components/ui/Calendar";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

type UpdateCallModalProps = {
  className?: string;
};

interface UpdateValuesData {
  success: boolean;
  message: string;
}

interface UpdateValuesParams {
  notes: string;
  date: string;
}


export const UpdateCallModal = ({ className }: UpdateCallModalProps) => {
  const [dateTime, setDateTime] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [notes, setNotes] = useState<String | undefined>('');
  const handleDateTimeChange = (event: any) => {
    const value = event.target.value;
    setDateTime(value);
  };
  const {toast} = useToast()
  const mutation = useMutation({
    mutationFn: (newTodo) => {
        return axios.post('/todos', newTodo)
    },
  })

  mutation.isPending ? (
    'Adding todo...'
  ) : 
    <>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      {mutation.isSuccess ? <div>Todo added!</div> : null}
</>

  return (
    <Dialog>
      <DialogTrigger asChild className={className}>
        <Button>
          <CheckIcon className="mr-2" />
          <span>Update Last Call</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
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
            <Input id="name" onChange={(e) => setNotes(e.currentTarget.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => mutation.mutate()}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
