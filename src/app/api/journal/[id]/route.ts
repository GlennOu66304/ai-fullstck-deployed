import { prisma } from "@/app/utils/db";
import { databseUserId } from "@/app/utils/userId";
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

  return NextResponse.json({data:updateData}) ;
};
