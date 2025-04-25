"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Users({ users } ) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md flex justify-between"
          >
            <div>
              <Button className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </Button>
              <p className="text-slate-50">Email: {user.email}</p>
            </div>
            <img
              className="rounded-full w-15"
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
}
