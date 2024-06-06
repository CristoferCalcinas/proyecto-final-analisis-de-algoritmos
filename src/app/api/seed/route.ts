import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

const list_procedures = [
    `CREATE OR REPLACE PROCEDURE insertar_facultad(
    	p_nombre_facultad VARCHAR,
    	p_descripcion_facultad VARCHAR
    ) AS
    $$
    BEGIN
    	INSERT INTO facultad(nombre, descripcion)
    	VALUES(p_nombre_facultad, p_descripcion_facultad);
    	COMMIT;
    END;    
    $$ LANGUAGE plpgsql;`,
    `CREATE OR REPLACE PROCEDURE insertar_estudiantes(
        p_nombre VARCHAR,
        p_apellido VARCHAR,
        p_carnet VARCHAR,
        p_fecha_nacimiento DATE,
        p_telefono VARCHAR,
        p_direccion VARCHAR
    ) AS
    $$
    DECLARE
        create_email VARCHAR(100);
    BEGIN
        -- Crear el email
        create_email := CONCAT(p_nombre, '.', p_apellido, '.', p_carnet, '@uab.edu.bo');

        -- Realizar la inserción
        INSERT INTO estudiante(nombre, apellido, carnet, fecha_nacimiento, email, telefono, direccion)
        VALUES (p_nombre, p_apellido, p_carnet, p_fecha_nacimiento, create_email, p_telefono, p_direccion);
        COMMIT;
    END;
    $$ LANGUAGE plpgsql;`,
    `CREATE OR REPLACE PROCEDURE insertar_curso(
    	p_codigo VARCHAR,
    	p_nombre VARCHAR,
    	p_descripcion TEXT,
    	p_creditos SMALLINT
    ) AS
    $$
    BEGIN
    	INSERT INTO curso(codigo, nombre, descripcion, creditos)
    	VALUES (p_codigo::VARCHAR, p_nombre::VARCHAR, p_descripcion::TEXT, p_creditos::SMALLINT);
    	COMMIT;
    END;
    $$ LANGUAGE plpgsql;`,
    `CREATE OR REPLACE PROCEDURE insertar_profesores(
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
    $$ LANGUAGE plpgsql;`
];
const list_facultad_insert = [
    "CALL insertar_facultad('Facultad de Ingeniería', 'Descripción de la Facultad de Ingeniería');",
    "CALL insertar_facultad('Facultad de Medicina', 'Descripción de la Facultad de Medicina');",
    "CALL insertar_facultad('Facultad de Derecho', 'Descripción de la Facultad de Derecho');",
    "CALL insertar_facultad('Facultad de Ciencias', 'Descripción de la Facultad de Ciencias');",
    "CALL insertar_facultad('Facultad de Economía', 'Descripción de la Facultad de Economía');",
    "CALL insertar_facultad('Facultad de Arquitectura', 'Descripción de la Facultad de Arquitectura');",
    "CALL insertar_facultad('Facultad de Letras', 'Descripción de la Facultad de Letras');",
    "CALL insertar_facultad('Facultad de Agronomía', 'Descripción de la Facultad de Agronomía');",
    "CALL insertar_facultad('Facultad de Educación', 'Descripción de la Facultad de Educación');",
    "CALL insertar_facultad('Facultad de Comunicación', 'Descripción de la Facultad de Comunicación');"
];
const list_estudiantes_insert = [
    "CALL insertar_estudiantes('Juan', 'Perez', 'CARNET01', '2000-01-01', '555-123401', 'Calle Falsa 101');",
    "CALL insertar_estudiantes('Ana', 'Lopez', 'CARNET02', '2000-02-01', '555-123402', 'Calle Falsa 102');",
    "CALL insertar_estudiantes('Luis', 'Martinez', 'CARNET03', '2000-03-01', '555-123403', 'Calle Falsa 103');",
    "CALL insertar_estudiantes('Maria', 'Gomez', 'CARNET04', '2000-04-01', '555-123404', 'Calle Falsa 104');",
    "CALL insertar_estudiantes('Carlos', 'Hernandez', 'CARNET05', '2000-05-01', '555-123405', 'Calle Falsa 105');",
    "CALL insertar_estudiantes('Elena', 'Rodriguez', 'CARNET06', '2000-06-01', '555-123406', 'Calle Falsa 106');",
    "CALL insertar_estudiantes('Jorge', 'Fernandez', 'CARNET07', '2000-07-01', '555-123407', 'Calle Falsa 107');",
    "CALL insertar_estudiantes('Sofia', 'Ramirez', 'CARNET08', '2000-08-01', '555-123408', 'Calle Falsa 108');",
    "CALL insertar_estudiantes('Daniel', 'Sanchez', 'CARNET09', '2000-09-01', '555-123409', 'Calle Falsa 109');",
    "CALL insertar_estudiantes('Laura', 'Torres', 'CARNET10', '2000-10-01', '555-123410', 'Calle Falsa 110');",
    "CALL insertar_estudiantes('Pedro', 'Diaz', 'CARNET11', '2000-11-01', '555-123411', 'Calle Falsa 111');",
    "CALL insertar_estudiantes('Carmen', 'Vega', 'CARNET12', '2000-12-01', '555-123412', 'Calle Falsa 112');",
    "CALL insertar_estudiantes('Miguel', 'Ramos', 'CARNET13', '2001-01-01', '555-123413', 'Calle Falsa 113');",
    "CALL insertar_estudiantes('Julia', 'Castro', 'CARNET14', '2001-02-01', '555-123414', 'Calle Falsa 114');",
    "CALL insertar_estudiantes('David', 'Mendez', 'CARNET15', '2001-03-01', '555-123415', 'Calle Falsa 115');",
    "CALL insertar_estudiantes('Clara', 'Guerrero', 'CARNET16', '2001-04-01', '555-123416', 'Calle Falsa 116');",
    "CALL insertar_estudiantes('Sergio', 'Flores', 'CARNET17', '2001-05-01', '555-123417', 'Calle Falsa 117');",
    "CALL insertar_estudiantes('Patricia', 'Cruz', 'CARNET18', '2001-06-01', '555-123418', 'Calle Falsa 118');",
    "CALL insertar_estudiantes('Roberto', 'Morales', 'CARNET19', '2001-07-01', '555-123419', 'Calle Falsa 119');",
    "CALL insertar_estudiantes('Isabel', 'Ortega', 'CARNET20', '2001-08-01', '555-123420', 'Calle Falsa 120');",
    "CALL insertar_estudiantes('Gabriel', 'Jimenez', 'CARNET21', '2001-09-01', '555-123421', 'Calle Falsa 121');",
    "CALL insertar_estudiantes('Monica', 'Vargas', 'CARNET22', '2001-10-01', '555-123422', 'Calle Falsa 122');",
    "CALL insertar_estudiantes('Francisco', 'Reyes', 'CARNET23', '2001-11-01', '555-123423', 'Calle Falsa 123');",
    "CALL insertar_estudiantes('Raquel', 'Ruiz', 'CARNET24', '2001-12-01', '555-123424', 'Calle Falsa 124');",
    "CALL insertar_estudiantes('Enrique', 'Silva', 'CARNET25', '2002-01-01', '555-123425', 'Calle Falsa 125');",
    "CALL insertar_estudiantes('Angela', 'Herrera', 'CARNET26', '2002-02-01', '555-123426', 'Calle Falsa 126');",
    "CALL insertar_estudiantes('Oscar', 'Muñoz', 'CARNET27', '2002-03-01', '555-123427', 'Calle Falsa 127');",
    "CALL insertar_estudiantes('Rosa', 'Navarro', 'CARNET28', '2002-04-01', '555-123428', 'Calle Falsa 128');",
    "CALL insertar_estudiantes('Rafael', 'Iglesias', 'CARNET29', '2002-05-01', '555-123429', 'Calle Falsa 129');",
    "CALL insertar_estudiantes('Sandra', 'Gimenez', 'CARNET30', '2002-06-01', '555-123430', 'Calle Falsa 130');"
];
const list_profesores_insert = [
    "CALL insertar_profesores('Ana', 'Gomez', '555-6789', 'Avenida Siempre Viva 456');",
    "CALL insertar_profesores('Luis', 'Perez', '555-1234', 'Calle Falsa 123');",
    "CALL insertar_profesores('Marta', 'Rodriguez', '555-9876', 'Calle Verdad 789');",
    "CALL insertar_profesores('Carlos', 'Fernandez', '555-4567', 'Calle Alegría 456');",
    "CALL insertar_profesores('Elena', 'Martinez', '555-6543', 'Avenida Paz 321');",
    "CALL insertar_profesores('Jorge', 'Lopez', '555-4321', 'Calle Armonía 654');",
    "CALL insertar_profesores('Sofia', 'Gonzalez', '555-3456', 'Avenida Unión 987');",
    "CALL insertar_profesores('Daniel', 'Ramirez', '555-7890', 'Calle Solidaridad 159');",
    "CALL insertar_profesores('Laura', 'Hernandez', '555-2468', 'Calle Justicia 753');",
    "CALL insertar_profesores('Pedro', 'Diaz', '555-1357', 'Avenida Libertad 852');",
    "CALL insertar_profesores('Adrian', 'Calcinas', '555-1357', 'Avenida Libertad 852');",
];
const list_cursos_insert = [
    "CALL insertar_curso('MAT101'::VARCHAR, 'Matemáticas Básicas'::VARCHAR, 'Curso de introducción a las matemáticas'::TEXT, 3::SMALLINT);",
    "CALL insertar_curso('FIS102'::VARCHAR, 'Física I'::VARCHAR, 'Curso de física básica'::TEXT, 4::SMALLINT);",
    "CALL insertar_curso('QUIM103'::VARCHAR, 'Química General'::VARCHAR, 'Curso de química general'::TEXT, 3::SMALLINT);",
    "CALL insertar_curso('BIO104'::VARCHAR, 'Biología I'::VARCHAR, 'Curso de biología básica'::TEXT, 4::SMALLINT);",
    "CALL insertar_curso('CS105'::VARCHAR, 'Ciencias Sociales'::VARCHAR, 'Curso de ciencias sociales'::TEXT, 2::SMALLINT);",
    "CALL insertar_curso('HIST106'::VARCHAR, 'Historia Universal'::VARCHAR, 'Curso de historia universal'::TEXT, 3::SMALLINT);",
    "CALL insertar_curso('LIT107'::VARCHAR, 'Literatura Clásica'::VARCHAR, 'Curso de literatura clásica'::TEXT, 2::SMALLINT);",
    "CALL insertar_curso('ECO108'::VARCHAR, 'Economía I'::VARCHAR, 'Curso de introducción a la economía'::TEXT, 3::SMALLINT);",
    "CALL insertar_curso('COMP109'::VARCHAR, 'Introducción a la Computación'::VARCHAR, 'Curso de introducción a la computación'::TEXT, 4::SMALLINT);",
    "CALL insertar_curso('ART110'::VARCHAR, 'Arte y Cultura'::VARCHAR, 'Curso de arte y cultura'::TEXT, 2::SMALLINT);",
];

export async function GET(request: Request) {
    await prisma.facultad.deleteMany();
    await prisma.estudiante.deleteMany();
    await prisma.curso.deleteMany();
    await prisma.profesores.deleteMany();

    for (let i = 0; i < list_procedures.length; i++) {
        await prisma.$executeRawUnsafe(list_procedures[i]);
    }

    list_facultad_insert.forEach(async (facultad) => {
        await prisma.$executeRawUnsafe(facultad);
    });
    list_estudiantes_insert.forEach(async (estudiante) => {
        await prisma.$executeRawUnsafe(estudiante);
    }
    );
    list_profesores_insert.forEach(async (profesor) => {
        await prisma.$executeRawUnsafe(profesor);
    }
    );
    list_cursos_insert.forEach(async (curso) => {
        await prisma.$executeRawUnsafe(curso);
    }
    );

    // const cursos = await prisma.curso.findMany();
    // console.log(cursos);
    return NextResponse.json({ message: 'Datos y S.P. Insertados!!!' });
}