/*
  Warnings:

  - Added the required column `employee_status` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "employee_status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "employee_status" (
    "value" TEXT NOT NULL,

    PRIMARY KEY ("value")
);

INSERT INTO "employee_status" ("value") VALUES ('ACTIVE'), ('DEACTIVATED'), ('ARCHIVED');

-- AddForeignKey
ALTER TABLE "employees" ADD FOREIGN KEY ("employee_status") REFERENCES "employee_status"("value") ON DELETE CASCADE ON UPDATE CASCADE;
