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
import { buttonVariants } from "@/components/ui/Button";

type AlertModalProps = {
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
  onTrigger: () => void;
};

export const AlertModal = (props: AlertModalProps) => {
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
            // onClick={() => props.onTrigger()}
          >
            {props.button ? props.button : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
