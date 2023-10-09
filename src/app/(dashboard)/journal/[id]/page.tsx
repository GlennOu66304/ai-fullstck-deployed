import { prisma } from "@/app/utils/db";
import { databseUserId } from "../../../utils/userId";
import Editor from "@/components/editor";
const entryDetail = async ({params}) => {
  const user = await databseUserId();
  // console.log(user);
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
  });
  // console.log(entry);
  return entry;
}

const EntryDetailPage = async ({ params }) => {
  const entry = await entryDetail({params})
  // console.log(entry);
  return (
    <div>
      <h1> this is the {params.id} page</h1>
      <Editor entry={entry} />
    </div>
  );
};

export default EntryDetailPage;
