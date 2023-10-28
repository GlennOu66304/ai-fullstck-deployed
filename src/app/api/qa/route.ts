import { databseUserId } from "@/app/utils/userId";
import { prisma } from "../../utils/db";
import { NextResponse } from "next/server";
import {qaAnswer}  from "@/app/utils/ai";
export const POST = async (request) => {
 const {entries,question} = await request.json();
  // console.log(entries,question);
  const qaData = await qaAnswer(entries,question);
  // console.log(qaData);
  return NextResponse.json({ data: qaData});
};

