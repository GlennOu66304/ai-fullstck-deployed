import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="bg-black h-screen w-full text-white flex justify-center items-center">
        <div>
          <h1 className="text-4xl">Mood Mate</h1>
          <p className="text-3xl"> help users track and manage their moods. </p>
          <Link href={"/home"}>
            <button className="bg-blue-500 rounded">get started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
