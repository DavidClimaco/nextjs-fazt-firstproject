
import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users", {
    headers: { "x-api-key": "reqres-free-v1" },
  });
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const users = await fetchUsers();
  return (
    <>
      <Users users={users} />
    </>
  );
}
