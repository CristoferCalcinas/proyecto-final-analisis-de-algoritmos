/*
  Warnings:

  - You are about to drop the column `id_facultad` on the `estudiante` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "estudiante" DROP CONSTRAINT "estudiante_id_facultad_fkey";

-- AlterTable
ALTER TABLE "estudiante" DROP COLUMN "id_facultad";

-- CreateTable
CREATE TABLE "estudiante_facultad" (
    "id" SERIAL NOT NULL,
    "id_estudiante" UUID,
    "id_facultad" INTEGER,

    CONSTRAINT "estudiante_facultad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "estudiante_facultad" ADD CONSTRAINT "estudiante_facultad_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "estudiante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "estudiante_facultad" ADD CONSTRAINT "estudiante_facultad_id_facultad_fkey" FOREIGN KEY ("id_facultad") REFERENCES "facultad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
