import { ProfileCard } from "@/components/cards/ProfileCard";
import { AddUserModal } from "@/components/modals/AddUserModal";
import connectToMongoDB from "@/lib/db/dbNativeConnect";
import { useQuery } from "@tanstack/react-query";

export default async function Dashboard() {
  const db = await connectToMongoDB()
  const users = await db.collection("contacts").find({}).toArray();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-9/12 mt-6 mb-6">
      <div className="flex justify-between w-full mb-8 mt-4">
        <h1 className="text-center mb-6 text-2xl font-bold">
          Hello, Dashboard Page!
        </h1>
        <div className="flex flex-col">
          <AddUserModal />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {users.map((user) => (
          <div className="mb-4">
            <ProfileCard
              name={user.name}
              category={user.relationship}
              lastCaughtUp={user.lastContacted}
              notes={user.notes}
              image={user.avatar}
              notification={user.notification}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
