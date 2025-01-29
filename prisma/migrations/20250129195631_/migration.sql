-- CreateTable
CREATE TABLE "month" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "totalFunds" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "totalSpent" DECIMAL(65,30) NOT NULL DEFAULT 0.00,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "month_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "monthId" INTEGER NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expense" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "month" ADD CONSTRAINT "month_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "month"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expense" ADD CONSTRAINT "expense_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
