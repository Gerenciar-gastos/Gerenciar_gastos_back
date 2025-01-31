/*
  Warnings:

  - You are about to alter the column `value` on the `expense` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalFunds` on the `month` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalSpent` on the `month` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "expense" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "month" ALTER COLUMN "totalFunds" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalSpent" SET DATA TYPE DOUBLE PRECISION;
