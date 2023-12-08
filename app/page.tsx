import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">CatchUp</h1>
      <p className="w-80 text-center text-sm my-4">
        An app for quick reminders to stay connected with your closest personal
        and professional contacts
      </p>
      <Link href="/home" className={buttonVariants({ variant: "default" })}>
        Start
      </Link>
    </div>
  );
}
