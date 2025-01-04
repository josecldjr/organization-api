/*
  Warnings:

  - Changed the type of `pccOrgId` on the `PccConfiguration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PccConfiguration" DROP COLUMN "pccOrgId",
ADD COLUMN     "pccOrgId" INTEGER NOT NULL;
