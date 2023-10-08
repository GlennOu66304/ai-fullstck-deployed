import { prisma } from "./db";
import { currentUser } from "@clerk/nextjs";
export const databseUserId = async () => {
  const clerkUser = await currentUser();
  const clekrId2 = await clerkUser.id;
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clekrId2,
    },
  });

  if (!user) return null;
  return user.id;
};
