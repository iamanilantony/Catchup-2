import { ContactValidator } from "@/lib/validators/contact";
// import Contact from "@/models/Contact";
// import mongoose from "mongoose";
import { z } from "zod";
// import dbConnect from "@/lib/db/dbConnect";
import connectDB from "@/lib/db/dbNativeConnect";
import { ObjectId } from "mongodb";
import avatars from "@/data/avatars";
import { authOptions, getAuthSession } from "@/lib/auth/auth";
import { getServerSession } from "next-auth";
import  geSession  from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const body = await req.json();
  const { name, relationship, duration } = req.body;
  console.log(req.body,'camw')
//   try {
//     const db = await connectDB();
//     try {
//       await db.collection("contacts").insertOne({
//         _id,
//         name,
//         relationship,
//         duration,
//         // userName: session.user?.id,
//         avatar,
//         lastContacted: new Date(),
//         startFrom: new Date(),
//         dayToContact: "monday",
//         removed: false,
//       });
//     } catch (e) {
//       console.log(e);
//     }
//     return new Response("added contact", { status: 200 });
//   } catch (error) {
//     console.log(error);
//     if (error instanceof z.ZodError) {
//       return new Response("Invalid request data passed", { status: 422 });
//     }
//     return new Response("Could not contact, please try again later", {
//       status: 500,
//     });
//   }
}
