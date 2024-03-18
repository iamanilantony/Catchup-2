"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/Alert-dialog";
import { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import axios from "axios";
import { toast } from "sonner";

type AlertModalProps = {
  id: string;
  trigger?: ReactNode | string;
  title?: string;
  desc?: string;
  button?: string;
  buttonType?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
};

export const AlertModal = (props: AlertModalProps) => {
  const hDelete = async () => {
    console.log("triggered");
    try {
      const response = await axios.delete("/api/contact/delete", {
        data: {
          contactId: props.id
        }
      });
      if (response.status === 200) toast("contact has been deleted");
      console.log(response.data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>{props.trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>
            {props.title ? props.title : "Are you absolutely sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {props.desc ? props.desc : "This action cannot be undone."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({
              variant: props.buttonType ? props.buttonType : "default"
            })}
            onClick={hDelete}
          >
            {props.button ? props.button : "Continue"}
          </AlertDialogAction>
          {/* <Button /> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
