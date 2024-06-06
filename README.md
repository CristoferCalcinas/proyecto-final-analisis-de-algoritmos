## Configuracion de prisma

1. Instalar prisma

```
npx prisma init
```

2. Crear un archivo .env en la raiz del proyecto

```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_de_datos"
```

Despues de ejecutar el comando npx prisma init se crea automaticamente el archivo .env con la variable DATABASE_URL, lo que habria que modificar es la cadena de conexion.

3. Lo ideal seria tener ya una base de datos ya creada, si es asi el comando a ejecutar es el siguiente:

```
npx prisma db pull
```

Este comando se encarga de leer la base de datos y generar los modelos en prisma.

4. Como prisma no maneja lo que son los procedimientos almacenados por defecto, se adjunta los procedimientos basicos para la insercion de filas en las tablas de la base de datos.

'''
CREATE OR REPLACE PROCEDURE insertar_facultad(
p_nombre_facultad VARCHAR,
p_descripcion_facultad VARCHAR
) AS

$$

BEGIN
	INSERT INTO facultad(nombre, descripcion)
	VALUES(p_nombre_facultad, p_descripcion_facultad);
	COMMIT;
END;

$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE insertar_estudiantes(
    p_nombre VARCHAR,
    p_apellido VARCHAR,
    p_carnet VARCHAR,
    p_fecha_nacimiento DATE,
    p_telefono VARCHAR,
    p_direccion VARCHAR,
    p_id_facultad INT
) AS
$$

DECLARE
create_email VARCHAR(100);
BEGIN
create_email := CONCAT(p_nombre, '.', p_apellido, '.', p_carnet, '@uab.edu.bo');
INSERT INTO estudiante(nombre, apellido, carnet, fecha_nacimiento, email, telefono, direccion, id_facultad)
VALUES (p_nombre, p_apellido, p_carnet, p_fecha_nacimiento, create_email, p_telefono, p_direccion, p_id_facultad);
COMMIT;
END;

$$
LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE insertar_curso(
	p_codigo VARCHAR,
	p_nombre VARCHAR,
	p_descripcion TEXT,
	p_creditos SMALLINT
) AS
$$

BEGIN
INSERT INTO cursos(codigo, nombre, descripcion, creditos)
VALUES (p_codigo, p_nombre, p_descripcion, p_creditos);
COMMIT;
END;

$$
LANGUAGE plpgsql;


CREATE OR REPLACE PROCEDURE insertar_inscripciones(
	p_uuid_estudiante uuid,
	p_id_curso INT
) AS
$$

DECLARE
fecha_de_inscripcion DATE;
estudiante_estado BOOLEAN;
BEGIN
fecha_de_inscripcion := now();
estudiante_estado := TRUE;
INSERT INTO inscripciones(id_estudiante, id_curso, fecha_inscripcion, estado)
VALUES (p_uuid_estudiante, p_id_curso, fecha_de_inscripcion, estudiante_estado);
COMMIT;
END;

$$
LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE insertar_profesores(
	p_nombre VARCHAR,
    p_apellido VARCHAR,
    p_telefono VARCHAR,
    p_direccion VARCHAR
) AS
$$

DECLARE
crear_email VARCHAR(100);
BEGIN
crear_email := CONCAT(p_nombre, '.', p_apellido, '.', p_telefono, '@uab.edu.bo');
INSERT INTO profesores(nombre, apellido, email, telefono, direccion)
VALUES (p_nombre, p_apellido, crear_email,p_telefono, p_direccion);
COMMIT;
END;

$$
LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE insertar_cursos_profesores(
	p_id_curso INT,
    p_id_profesor INT
) AS
$$

BEGIN
INSERT INTO cursos_profesores(id_curso, id_profesor)
VALUES (p_id_curso, p_id_profesor);
END;

$$
LANGUAGE plpgsql;
'''
$$
