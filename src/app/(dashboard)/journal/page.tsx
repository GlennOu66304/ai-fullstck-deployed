import { prisma } from "../../utils/db";
import EnttrieCard from "@/components/entryCard";
import NewEntry from "@/components/newEntry";
import { databseUserId } from "../../utils/userId";
import Link from "next/link";

const loadEntries = async () => {
 const  id = await databseUserId()
  const Enttries = await prisma.journalEntry.findMany({
    where: {
      userId: id,
      // userId: 1,
    },
  });
  return Enttries;
};

const Journal = async () => {
  const entries = await loadEntries();


  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full md:w-1/3">
        <NewEntry />
      </div>

      {entries.map((entry) => {
        return (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`}>
              <EnttrieCard className="w-full md:w-1/3" entry2={entry} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Journal;
