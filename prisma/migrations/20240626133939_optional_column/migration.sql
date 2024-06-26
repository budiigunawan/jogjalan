/*
  Warnings:

  - Made the column `createdAt` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startTime` on table `OpeningHour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endTime` on table `OpeningHour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `OpeningHour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `OpeningHour` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Place` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Place` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `PlacesToCategories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `PlacesToCategories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Tag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_placeId_fkey";

-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_tagId_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "OpeningHour" ALTER COLUMN "startTime" SET NOT NULL,
ALTER COLUMN "startTime" SET DATA TYPE TIME,
ALTER COLUMN "endTime" SET NOT NULL,
ALTER COLUMN "endTime" SET DATA TYPE TIME,
ALTER COLUMN "placeId" DROP NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Place" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "instagram" DROP NOT NULL,
ALTER COLUMN "website" DROP NOT NULL,
ALTER COLUMN "imgUrl" DROP NOT NULL,
ALTER COLUMN "tagId" DROP NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "PlacesToCategories" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpeningHour" ADD CONSTRAINT "OpeningHour_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE SET NULL ON UPDATE CASCADE;
