-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "imageUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "imageWidth" INTEGER NOT NULL,
    "imageHeight" INTEGER NOT NULL
);
INSERT INTO "new_Project" ("context", "createdAt", "id", "imageHeight", "imageUrl", "imageWidth", "objectives", "results", "technologies", "title", "videoUrl") SELECT "context", "createdAt", "id", "imageHeight", "imageUrl", "imageWidth", "objectives", "results", "technologies", "title", "videoUrl" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
