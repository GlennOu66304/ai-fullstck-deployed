import { prisma } from "../../utils/db";
import EnttrieCard from "@/components/entryCard";
import NewEntry from "@/components/newEntry";
import { databseUserId } from "../../utils/userId";
import Link from "next/link";
const loadEntries = async () => {
 
  const Enttries = await prisma.journalEntry.findMany({
    where: {
      userId: databseUserId(),
    },
  });
  return Enttries;
};

const Journal = async () => {
  const entries = await loadEntries();
  // console.log(entries);
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
