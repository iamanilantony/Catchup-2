import { cn } from "@/components/lib/utils";
import SignIn from "@/components/SignIn";
import { buttonVariants } from "@/components/ui/Button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const page: FC = () => {
  return (
    <div>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "self-start -mt-20"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Home
      </Link>
      <SignIn />
    </div>
  );
};

export default page;
