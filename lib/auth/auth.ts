import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToMongoDB from "@/lib/db/dbAdaptor";
import dbOptions from "./dbAuthOptions";
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
  secret: "nosecret",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async session({ token, user }) {
      if (user) {
        return {
          ...token,
          expires: new Date("2024 Dec 12").toISOString()
        };
      }

      return token;
    },

    async jwt({ token }) {
      const db = await connectMongoDB();
      const dbUser = await db.collection("users").findOne({ _id: token.id });

      if (!dbUser) {
        token.id = token!.id;
        return token;
      }

      if (!dbUser.username) {
        await db.collection("user").updateOne(
          {
            _id: dbUser.id
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
        userName: dbUser.username,
        expires: new Date("2024 Dec 12").toISOString()
      };
    },
    redirect() {
      return "/";
    }
  }
};

export const getAuthSession = () => getServerSession(authOptions);
