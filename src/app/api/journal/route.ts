import { databseUserId } from "@/app/utils/userId";
import { prisma } from "../../utils/db";
import { NextResponse } from "next/server";
export const POST = async () => {
  const id = await databseUserId();
  console.log(id);
  const newEntry = await prisma.journalEntry.create({
    data: {
      userId: id,
      content: "this is new journal Entry",
    },
  });
  return NextResponse.json({ data: newEntry });
};
