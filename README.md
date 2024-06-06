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