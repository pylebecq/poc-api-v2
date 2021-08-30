/*
  Warnings:

  - Added the required column `created_at` to the `enrolments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "enrolments" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
