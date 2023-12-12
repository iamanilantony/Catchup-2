import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToMongoDB from "@/lib/db/dbAdaptor";
import dbOptions from "./dbAuthOptions";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";
import connectMongoDB from "../db/dbNativeConnect";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(connectToMongoDB(), dbOptions),
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/sign-in"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.userName = token.userName;
      }

      return session;
    },

    async jwt({ token, user }) {
      const db = await connectMongoDB();
      const dbUser = await db
        .collection("users")
        .findOne({ userName: token.userName });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (!dbUser.username) {
        await db.collection("user").updateOne(
          {
            id: dbUser.id
          },
          {
            $set: {
              userName: nanoid(10)
            }
          }
        );
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        userName: dbUser.username
      };
    },
    redirect() {
      return "/";
    }
  }
};
