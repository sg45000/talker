/*
  Warnings:

  - You are about to drop the column `firstName` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Post` table. All the data in the column will be lost.
  - Added the required column `archive` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `body` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "firstName",
DROP COLUMN "gender",
DROP COLUMN "lastName",
ADD COLUMN     "archive" BOOLEAN NOT NULL,
ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
