import { prisma } from "@/app/utils/db";
import { databseUserId } from "@/app/utils/userId";
import { analysis2 } from "@/app/utils/ai";
import { NextResponse } from "next/server";

export const PATCH = async (request, {params}) => {
  const {content} = await request.json();
  const user = await databseUserId();
  console.log(params);
  const updateData = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },

    data: {
      content: content,
      updatedAt: new Date(),
    },
  });

  const analysis = await analysis2(updateData.content);

  await prisma.analysis.upsert(
    {
      where: {
        userId:user.id,
        journalId: updateData.id,
      },
      update: analysis,
      create: {
        userId:user.id,
        journalId: updateData.id,
        ...analysis,
      
      },
    }
  )
  return NextResponse.json({data:updateData, analysis:analysis}) ;
};
