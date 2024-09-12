"use server";

import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export async function UserDetailUpdate(userId, url) {
  const isUser = await Prisma.saaSUser.findUnique({
    where: { clerkId: userId },
  });

  if (!isUser) {
    // User doesn't exist, create a new user
    const isUser = await Prisma.saaSUser.create({
      data: {
        clerkId: userId,
        credits: 14,
        editedUrls: [url],
        totalEdit: 1,
      },
    });
    console.log(isUser);
    return "New user created and details updated.";
  } else {
    const creditAvailable = isUser.credits;
    console.log(isUser);
    if (creditAvailable <= 0) {
      return "Insufficient credits.";
    }

    const updatedUrls = [...isUser.editedUrls, url];
    const newCredit = creditAvailable - 1;

    await Prisma.saaSUser.update({
      where: { clerkId: userId },
      data: {
        credits: newCredit,
        editedUrls: updatedUrls,
        totalEdit: isUser.totalEdit + 1,
      },
    });

    return "User details updated.";
  }
}

