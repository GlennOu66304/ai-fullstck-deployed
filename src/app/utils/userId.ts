import { prisma } from "./db";
import { auth } from "@clerk/nextjs";
export const databseUserId = async (): string => {
  const {userId}  =  auth();

  // console.log(userId)
  
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });

  return user;
};
