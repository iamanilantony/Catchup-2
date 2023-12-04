"use client";

import HeadSEO from "../components/HeadSEO";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../components/ui/dialog";

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
          <Dialog>
            <DialogTrigger>
              <Button className="mt-2 text-blue-400">Click Here</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add your Catchup</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
