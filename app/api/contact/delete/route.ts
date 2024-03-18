import connectDB from "@/lib/db/dbNativeConnect";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { contactId } = body;
  try {
    const db = await connectDB();
    const session = await getServerSession(authOptions);
    if(!session?.user.id) {
      return new Response("Unauthorized", { status: 401 });
    }
    try {
      const result = await db.collection("contacts").deleteOne({_id: contactId});
      if (result.deletedCount === 0) {
        return new Response("Contact not found", { status: 404 });
      }
  
      return new Response("Contact deleted", { status: 200 });

    } catch (e) {
      console.log(e);
    }
    return new Response("added contact", { status: 200 });
  } catch (error) {
    return new Response("Could not delete contact, please try again later", { status: 500 });
  }
}
