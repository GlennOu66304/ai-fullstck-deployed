import { prisma } from "@/app/utils/db";
import { databseUserId } from "../../../utils/userId";
import Editor from "@/components/editor";
const entryDetail = async ({ params }) => {
  const user = await databseUserId();

  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    include:{
      analysis:true
    }
  });
  // console.log(entry);
  return entry;
};

const EntryDetailPage = async ({ params }) => {
  const entry = await entryDetail({ params });

  return (
    <div className="h-full w-full">
  
      
        <Editor entry={entry} />
    

      {/* <div className="flex justify-end flex-col">
        <h1 style={{backgroundColor:color}}> this is the analysis sections</h1>
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

      </div> */}
    </div>
  );
};

export default EntryDetailPage;
