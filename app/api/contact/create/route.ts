import { z } from "zod";
import connectDB from "@/lib/db/dbNativeConnect";
import { ObjectId } from "mongodb";
import avatars from "@/data/avatars";
import { authOptions } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, relation, callFrequency } = body;
  console.log(name, relation, callFrequency)
  try {
    const db = await connectDB();
    const session = await getServerSession(authOptions);
    const _id = new ObjectId();
    const index = Math.floor(Math.random() * 11);
    console.log(session, _id);
    const avatar = avatars[index];
    try {
      await db.collection("contacts").insertOne({
        _id,
        name,
        relation,
        callFrequency,
        avatar,
        lastContacted: new Date(),
        startFrom: new Date(),
        removed: false,
        createdBy: session?.user.id,
        createdAt: new Date(),
      });
    } catch (e) {
      console.log(e);
    }
    return new Response("added contact", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response("Invalid request data passed", { status: 422 });
    }
    return new Response("Could not contact, please try again later", {
      status: 500,
    });
  }
}
