import { databseUserId } from "@/app/utils/userId";
import { prisma } from "../../utils/db";
import { NextResponse } from "next/server";
import { analysis2 } from "@/app/utils/ai";
export const POST = async () => {
  const {id} = await databseUserId();
  // console.log(id);
  const newEntry = await prisma.journalEntry.create({
    data: {
      userId: id,
      content: "I went to park and eact ice cream , which made me really happy.",
    },
  });
// console.log(newEntry)
const Analyze = await analysis2(newEntry.content)
// console.log(Analyze)
 
await prisma.analysis.create({
    data:{
      userId:id,
      journalId: newEntry.id,
      ...Analyze
      // mood:Analyze.mood,
      // subject:Analyze.subject,
      // negative:Analyze.negative,
      // summary:Analyze.summary,
      // color:Analyze.color,
      // sentimentScore:Analyze.sentimentScore,
    }

  })
  return NextResponse.json({ data: newEntry });
};

