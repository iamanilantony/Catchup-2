import { getAuthSession } from "@/lib/auth/auth";
import Link from "next/link";
import React from "react";
import UserAccountNav from "@/components/UserAccountNav";
import { buttonVariants } from "@/components/ui/Button";

export default async function Navbar() {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 w-9/12 py-4">
      <div className="flex justify-between">
        <div className=" text-2xl">
          <Link href={"/"}>
            <span className="font-bold">Catch</span>up
          </Link>
        </div>
        {session ? (
          <UserAccountNav picture={session.picture} />
        ) : (
          <Link href={"/sign-in"} className={buttonVariants()}>
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
