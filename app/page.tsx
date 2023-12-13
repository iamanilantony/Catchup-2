import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import LandingPage from "@/components/Landingpage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <LandingPage />
    </div>
  );
}
