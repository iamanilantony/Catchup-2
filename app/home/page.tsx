import { getAuthSession } from "@/lib/auth/auth";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/Landingpage";

export default async function Page() {
  const user = await getAuthSession();
  return (
    <div>
      {!user ? (
        <LandingPage />
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center w-full mt-6 mb-6">
          <Dashboard />
        </div>
      )}
    </div>
  );
}
