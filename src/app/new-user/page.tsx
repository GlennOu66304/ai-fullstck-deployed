import { prisma } from "../utils/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createUser = async () => {
  const user = await currentUser();

  // first check if user exists in the database with this clerk Id, if not, create a new user

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  // if it exists, redirect to the journal page
  redirect("/journal");
};


const NewUserPage = async () => {
  await createUser();
  return <div> loading page</div>;
};

export default NewUserPage;
