"use client";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/Form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio-group";
import categoriesData from "@/data/categories";
import frequencyData from "@/data/callFrequency";

const relationValues = categoriesData.map((c) => c.code) as [
  string,
  ...string[]
];
const callFrequency = frequencyData.map((f) => f.code) as [string, ...string[]];

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  relation: z.enum(relationValues),
  callFrequency: z.enum(callFrequency)
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export const AddUserModal = () => {
  const [name, setName] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      callFrequency: "monthly",
      relation: "family"
    }
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Click Here</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add FollowUp</DialogTitle>
          <DialogDescription>Create your FollowUp</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="callFrequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Frequency</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {frequencyData.map((f) => (
                          <SelectItem value={f.code}>{f.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="relation"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Relation</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {categoriesData.map((c) => (
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value={c.code} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {c.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
