import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToMongoDB from "@/lib/db/dbAdaptor";
import dbOptions from "./dbAuthOptions";
import connectMongoDB from "../db/dbNativeConnect";
import { nanoid } from "nanoid";
import { ObjectId } from "mongodb";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(connectToMongoDB(), dbOptions),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: "nosecret",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const db = await connectMongoDB();
      const dbUser = await db
        .collection("users")
        .findOne({ _id: new ObjectId(token.sub) });
      if (!dbUser) {
        token.id = token!.id;
        return token;
      }

      if (!dbUser.username) {
        await db.collection("user").updateOne(
          {
            _id: dbUser.id,
          },
          {
            $set: {
              userName: nanoid(10),
            },
          }
        );
      }

      token.accessToken = token.jti;
      token.id = dbUser._id.toHexString();
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.jti;
      session.user.id = token.id;
      return session
    },
    redirect() {
      return "/";
    },
  },
};

export const getAuthSession = (req) => getServerSession(req ? req : authOptions);
