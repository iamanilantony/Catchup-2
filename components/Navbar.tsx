import { getServerSession } from "next-auth";
import React from "react";
import SignIn from "./SignIn";
import { Button } from "./ui/Button";

export default async function Navbar() {
  const session = await getServerSession();
  return (
    <div className="fixed top-0 w-9/12 py-4">
      <div className="flex justify-between">
        <div className=" text-2xl">
          <span className="font-bold">Catch</span>up
        </div>
        <SignIn />
      </div>
    </div>
  );
}
