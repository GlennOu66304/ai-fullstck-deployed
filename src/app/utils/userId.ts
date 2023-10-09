import { prisma } from "./db";
import { auth } from "@clerk/nextjs";
export const databseUserId = async (): string => {
  const { userId } = auth();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  });
// console.log(user);
  return user;
};
