### Consideraciones

- Se debe tener instalado `node` y `npm` en el sistema para el funcionamiento correcto del proyecto.
- Tener instalado 'docker desktop' para el manejo de la base de datos.

## Como levantar o proyucto

1. Instalar los modulos de node.

```
npm i
```

2. Modificar el nombre del archivo .env.template a .env y modificar las variables de entorno.
3. Tener en ejecucion docker y en el root del proyecto ejecutar el siguiente comando.

```
docker compose up -d
```

4. Para la migracion de la base de datos ejecutar el siguiente comando.

```
npx prisma migrate dev
```

5. Para levantar el proyecto ejecutar el siguiente comando.

```
npm run dev
```

6. Click para crear los datos semilla.
   [localhost:3000/api/seed](localhost:3000/api/seed)
