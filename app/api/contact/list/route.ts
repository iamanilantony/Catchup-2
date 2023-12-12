import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db/dbConnect";
import Contact, { ContactDocument } from "@/models/Contact";
import connectToMongoDB from "@/lib/db/dbNativeConnect";

export async function GET(req: Request, res: NextApiResponse) {
  const db = await connectToMongoDB();
  const body = await req.json();
  try {
    const contacts: ContactDocument[] = (await (Contact as any).find(
      {}
    )) as ContactDocument[];
    console.log(contacts, "worse");
    res.status(200).json({ status: "success", data: contacts });
  } catch (e) {
    console.error(e);
    res.status(404).json({
      status: "error",
      message: "Recipe search could not be performed."
    });
  }
}
