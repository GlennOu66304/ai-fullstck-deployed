import { prisma } from "../../utils/db";
import EntryCard from "@/components/entryCard";
import NewEntry from "@/components/newEntry";
import { databseUserId } from "../../utils/userId";
import Link from "next/link";

const loadEntries = async () => {
  try {
    const  id = await databseUserId()
    const Entries = await prisma.journalEntry.findMany({
      where: {
        userId: id,
      },
    });
    return Entries;
    
  } catch (error) {
    console.log(error)
    return []
  }

};

const Journal = async () => {
  const entries = await loadEntries();


  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full md:w-1/3">
        <NewEntry />
      </div>

      {entries.length > 0 && entries.map((entry) => {
        return (
          <div key={entry.id}>
            <Link href={`/journal/${entry.id}`}>
              <EntryCard className="w-full md:w-1/3" entry2={entry} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Journal;
