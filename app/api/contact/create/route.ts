import { ContactValidator } from "@/lib/validators/contact";
import Contact from "@/models/Contact";
import mongoose from "mongoose";
import { z } from "zod";
import dbConnect from "@/lib/db/dbConnect";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { name, relationship, duration } = ContactValidator.parse(body);
  try {
    await dbConnect();
    const userIdString = "6577bca33f6054ef3ef47027";
    const userId = new mongoose.Types.ObjectId(userIdString);
    const contact = new Contact({
      userName: userId,
      name,
      relationship,
      duration
    });
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
