"use client";

import HeadSEO from "../components/HeadSEO";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <HeadSEO />
      <main>
        <div className="min-h-screen flex flex-col justify-center text-white items-center bg-black">
          <h1 className="font-bold text-4xl">CatchUp</h1>
          <p className="w-80 text-center text-sm my-4">
            An app for quick reminders to stay connected with your closest
            personal and professional contacts
          </p>
          <Button className="mt-2 text-blue-400">Click Here</Button>
        </div>
      </main>
    </div>
  );
}
