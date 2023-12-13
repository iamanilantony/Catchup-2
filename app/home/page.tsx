import { getAuthSession } from "@/lib/auth/auth";
import Dashboard from "@/components/Dashboard";
import SignIn from "@/components/SignIn";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import LandingPage from "@/components/Landingpage";

export default async function Page() {
  const user = await getAuthSession();
  console.log(user);
  return (
    <div>
      {!user ? (
        <LandingPage />
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center w-9/12 mt-6 mb-6">
          <Dashboard />
        </div>
      )}
    </div>
  );
}
