-- CreateTable
CREATE TABLE "curso" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(10),
    "nombre" VARCHAR(50),
    "descripcion" TEXT,
    "creditos" SMALLINT,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos_profesores" (
    "id" SERIAL NOT NULL,
    "id_curso" INTEGER,
    "id_profesor" INTEGER,

    CONSTRAINT "cursos_profesores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estudiante" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(30),
    "carnet" VARCHAR(20),
    "fecha_nacimiento" DATE,
    "email" VARCHAR(100),
    "telefono" VARCHAR(15),
    "direccion" VARCHAR(200),
    "id_facultad" INTEGER,

    CONSTRAINT "estudiante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facultad" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(40),
    "descripcion" TEXT,

    CONSTRAINT "facultad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscripciones" (
    "id" SERIAL NOT NULL,
    "id_estudiante" UUID,
    "id_curso" INTEGER,
    "fecha_inscripcion" DATE,
    "estado" BOOLEAN,

    CONSTRAINT "inscripciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profesores" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(30),
    "email" VARCHAR(100),
    "telefono" VARCHAR(15),
    "direccion" VARCHAR(200),

    CONSTRAINT "profesores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "curso_codigo_key" ON "curso"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_carnet_key" ON "estudiante"("carnet");

-- CreateIndex
CREATE UNIQUE INDEX "estudiante_email_key" ON "estudiante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "facultad_nombre_key" ON "facultad"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "profesores_email_key" ON "profesores"("email");

-- AddForeignKey
ALTER TABLE "cursos_profesores" ADD CONSTRAINT "cursos_profesores_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cursos_profesores" ADD CONSTRAINT "cursos_profesores_id_profesor_fkey" FOREIGN KEY ("id_profesor") REFERENCES "profesores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "estudiante" ADD CONSTRAINT "estudiante_id_facultad_fkey" FOREIGN KEY ("id_facultad") REFERENCES "facultad"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inscripciones" ADD CONSTRAINT "inscripciones_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "curso"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "inscripciones" ADD CONSTRAINT "inscripciones_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "estudiante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
