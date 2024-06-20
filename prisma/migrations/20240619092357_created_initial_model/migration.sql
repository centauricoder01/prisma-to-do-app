-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubDomain" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "task" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "domainId" INTEGER NOT NULL,

    CONSTRAINT "SubDomain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "SubDomain" ADD CONSTRAINT "SubDomain_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
