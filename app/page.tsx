import {Button } from "@/components/ui/button";
import Image from "next/image";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const users = await fetchUsers();
  return (
  <>
    <ul>
      {users.map(user => (
        <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between">
          <div>
            <Button className="font-bold">{user.id} {user.first_name} {user.last_name}</Button>
            <p className="text-slate-50">Email: { user.email}</p>
          </div>
            <img className="rounded-full w-15" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </li>
      ))}
    </ul>
  </>
  )
}
