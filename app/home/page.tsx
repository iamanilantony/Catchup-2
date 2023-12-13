import { getAuthSession } from "@/lib/auth/auth";
import Dashboard from "@/components/Dashboard";
import SignIn from "@/components/SignIn";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export default async function Page() {
  const user = await getAuthSession();
  console.log(user);
  return (
    <div>
      {!user ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl">CatchUp</h1>
          <p className="w-80 text-center text-sm my-4">
            An app for quick reminders to stay connected with your closest
            personal and professional contacts
          </p>
          <div className="flex my-4">
            <Image
              src="/char1/expr1.webp"
              width="200"
              height="200"
              alt="animoji"
            />
            <Image
              src="/char2/expr2.webp"
              width="200"
              height="200"
              alt="animoji"
            />
            <Image
              src="/char3/expr1.webp"
              width="200"
              height="200"
              alt="animoji"
            />
          </div>
          {/* <div>Login to Start Catching up</div> */}
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center w-9/12 mt-6 mb-6">
          <Dashboard />
        </div>
      )}
    </div>
  );
}
