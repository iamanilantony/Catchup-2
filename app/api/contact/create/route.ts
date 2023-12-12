import connectDB from "@/lib/db/dbNativeConnect";
import { ContactValidator } from "@/lib/validators/contact";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request, res: Response) {
  const db = await connectDB();
  const body = await req.json();

  const { name, relationship, duration } = ContactValidator.parse(body);
  try {
    await db.collection("contacts").insertOne({ name, relationship, duration });
    return new Response("added contact", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    return new Response("Could not contact, please try again later", {
      status: 500
    });
  }
}
