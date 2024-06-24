/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OpeningHour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Place` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PlacesToCategories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_placeId_fkey";

-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_tagId_fkey";

-- DropForeignKey
ALTER TABLE "PlacesToCategories" DROP CONSTRAINT "PlacesToCategories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "PlacesToCategories" DROP CONSTRAINT "PlacesToCategories_placeId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Category_id_seq";

-- AlterTable
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "placeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "OpeningHour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OpeningHour_id_seq";

-- AlterTable
ALTER TABLE "Place" DROP CONSTRAINT "Place_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tagId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Place_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Place_id_seq";

-- AlterTable
ALTER TABLE "PlacesToCategories" DROP CONSTRAINT "PlacesToCategories_pkey",
ALTER COLUMN "placeId" SET DATA TYPE TEXT,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "PlacesToCategories_pkey" PRIMARY KEY ("placeId", "categoryId");

-- AlterTable
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tag_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tag_id_seq";

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OpeningHour" ADD CONSTRAINT "OpeningHour_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacesToCategories" ADD CONSTRAINT "PlacesToCategories_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlacesToCategories" ADD CONSTRAINT "PlacesToCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
