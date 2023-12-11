import connectDB from "@/lib/dbNativeConnect";
import { ContactValidator } from "@/lib/validators/contact";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const db = await connectDB();
  const body = await req.json();

  const { name, relationship, duration } = ContactValidator.parse(body);
  console.log(name, relationship, duration);

  try {
    const contact = await db
      .collection("contacts")
      .insertOne({ name, relationship, duration });
    console.log(contact);
    return new Response("added contact", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Failed to add contact", { status: 404 });
  }
}
