"use client";

import { buildNewEntry } from "@/app/utils/api";
import { useRouter } from "next/navigation";
const NewEntry = () => {
  const router = useRouter();
  const createNewEntry = async () => {
    const data = await buildNewEntry();
    // console.log(data);
    router.push(`journal/${data.data.id}`);
  };

  return (
    <div>
      <h2>This is the new Entry Card</h2>
      <button onClick={createNewEntry} className="bg-blue-600 rounded-sm"> New Entry</button>
    </div>
  );
};

export default NewEntry;
