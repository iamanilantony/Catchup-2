import { ContactValidator } from "@/lib/validators/contact";
import Contact from "@/models/Contact";
import mongoose from "mongoose";
import { z } from "zod";
import dbConnect from "@/lib/db/dbConnect";
import { ObjectId } from "mongodb";
import avatars from "@/data/avatars";
import { getAuthSession } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { name, relationship, duration } = ContactValidator.parse(body);
  try {
    await dbConnect();
    const session = await getServerSession();
    console.log(session, "minimini");
    // const userIdString = "6577bca33f6054ef3ef47027";
    // const userId = new mongoose.Types.ObjectId(userIdString).toHexString();
    const _id = new ObjectId().toHexString();
    const index = Math.floor(Math.random() * 11);
    console.log(session, _id);
    const avatar = avatars[index];
    const contact = new Contact({
      _id,
      userName: session.user?.id,
      name,
      relationship,
      duration,
      avatar,
      lastContacted: new Date(),
      startFrom: new Date(),
      dayToContact: "monday",
      removed: false
    });
    // console.log(contact);
    await contact.save();
    return new Response("added contact", { status: 200 });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    return new Response("Could not contact, please try again later", {
      status: 500
    });
  }
}
