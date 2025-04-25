import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex">
      <Button className="text-white" variant="link" >
        <Link href="/">Home</Link>
      </Button>
        <li>
          <Button className="text-white" variant="link" >
            <Link href="/">Users</Link>
          </Button>
        </li>
        <li>
          <Button className="text-white" variant="link" >
            <Link href="/about">About</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
