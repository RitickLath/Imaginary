"use server";

import prisma from "../prisma";

export async function UserDetailUpdate(userId, url) {
  const isUser = await prisma.saaSUser.findUnique({
    where: { clerkId: userId },
  });

  if (!isUser) {
    // User doesn't exist, create a new user
    const isUser = await prisma.saaSUser.create({
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

    await prisma.saaSUser.update({
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

export async function getUserCreditsAndUrls(userId) {
  const isUser = await prisma.saaSUser.findUnique({
    where: { clerkId: userId },
    select: {
      credits: true, // Fetch only the credits
      editedUrls: true, // Fetch only the editedUrls
    },
  });

  if (!isUser) {
    return { message: "User not found", credits: 0, editedUrls: [] };
  }

  return { credits: isUser.credits, editedUrls: isUser.editedUrls };
}
