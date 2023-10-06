"use client"
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
export default function  Home(

) {
  const {userId} = useAuth();
  console.log(userId);
  const href = userId ? "/journal":"/new-user";
  return (
    <main>
      <div className="bg-black h-screen w-full text-white flex justify-center items-center">
        <div>
          <h1 className="text-4xl">Mood Mate</h1>
          <p className="text-3xl"> help users track and manage their moods. </p>
          <Link href={href}>
            <button className="bg-blue-500 rounded">get started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
