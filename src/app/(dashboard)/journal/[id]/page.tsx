import { prisma } from "@/app/utils/db";
import { databseUserId } from "../../../utils/userId";
import Editor from "@/components/editor";
const entryDetail = async ({ params }) => {
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
};

const EntryDetailPage = async ({ params }) => {
  const entry = await entryDetail({ params });
  // console.log(entry);
  const list = [
    {
      name: "mood",
      content: "this is the subject",
    },
    {
      name: "summary",
      content: "this is the summary",
    },
    {
      name: "nagative",
      content: "False",
    },
  ]
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        {" "}
        <h1> this is the {params.id} page</h1>
        <Editor entry={entry} />
      </div>

      <div className="flex justify-end flex-col">
        <h1 className="bg-green-600"> this is the analysis sections</h1>
 {
  list.map((item) => {
    return (
      <div className="mb-5">
       <span>{item.name}:</span>
        <span>{item.content}</span>
      </div>
    )
  }
  )
}

      </div>
    </div>
  );
};

export default EntryDetailPage;
