import UserList from "@/Components/Task2/UserList";

export default function Home() {

  return (
    <div className="flex gap-4 items-center flex-col">
      <h1 className="text-4xl font-bold mb-4 mt-20">User List from API</h1>

      {/* Render UserList Component */}
      <UserList />
    </div>
  );
}
