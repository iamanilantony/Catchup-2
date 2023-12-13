import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/Button";

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="fixed top-0 w-9/12 py-4">
      <div className="flex justify-between">
        <div className=" text-2xl">
          <Link href={"/"}>
            <span className="font-bold">Catch</span>up
          </Link>
        </div>
        <Link href={"/sign-in"} className={buttonVariants()}>
          SignIn
        </Link>
      </div>
    </div>
  );
}
