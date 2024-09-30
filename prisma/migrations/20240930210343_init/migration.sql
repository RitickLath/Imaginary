-- CreateTable
CREATE TABLE "SaaSUser" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "totalEdit" INTEGER NOT NULL,
    "editedUrls" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SaaSUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaaSCreditTransactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SaaSCreditTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SaaSUser_clerkId_key" ON "SaaSUser"("clerkId");

-- AddForeignKey
ALTER TABLE "SaaSCreditTransactions" ADD CONSTRAINT "SaaSCreditTransactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "SaaSUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
