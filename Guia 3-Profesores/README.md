# Proyecto: Aplicación Web para la Gestión de Docentes
# Descripción
   Esta es una aplicación web fullstack que utiliza React para el frontend, Express para el backend, y MySQL como base de datos. Además, Docker se emplea para la contenedorización. Se divide en tres componentes:

   Backend: Gestionado por Express, se conecta a la base de datos profesores_db.
   Frontend: Desarrollado en React, muestra y permite agregar docentes.
   Docker: Se utiliza para contenedores, gestionando frontend, backend y base de datos a través de docker-compose.yml.


# Tecnologías
   Frontend: React.
   Backend: Express.
   Base de Datos: MySQL con una tabla de docentes.

# Funcionalidades
   Agregar docentes.
   Visualizar la lista de docentes.
   Almacenamiento persistente en MySQL.


# Requisitos
- Node.js: Para instalar node visita nodejs.org y descarga la versión para tu sistema operativo
- Tener Docker instalado.: [Guía para instalar Docker](https://www.youtube.com/watch?v=cWuirzMOwwg).
- Disponer de un gestor de bases de datos.

# Instalación 
- Clonar el Repositorio:
   Haz clic en el botón "Code" y copia la URL del repositorio. Luego, abre Git Bash, pega la URL y ejecuta el comando correspondiente para clonar el repositorio. Una vez clonado o descomprimido, deberías ver la estructura de archivos del proyecto.

- Importar la Base de Datos:
   Abre tu gestor de base de datos (por ejemplo, XAMPP) e importa el archivo "profesores_db.sql" para cargar la base de datos requerida por la aplicación.

- Instalar Dependencias:
   Abre un editor de código y navega a la carpeta "Guia3-Proyecto-Profesores". Entra a la carpeta del frontend con cd Frontend y ejecuta el comando npm install para instalar las dependencias necesarias. Luego, ejecuta npm start para iniciar el frontend.
   Realiza el mismo procedimiento en la carpeta del backend (cd Backend), ejecuta npm install y luego npm start para iniciarlo. Una vez que ambos estén corriendo, puedes acceder a la aplicación en http://localhost:3000/.

# Uso con Dockerfile
-  Abrir Docker Desktop e iniciar sesión:
   Abre Docker Desktop e inicia sesión con tu cuenta. Si aún no tienes Docker Desktop instalado, asegúrate de hacerlo antes de continuar.

- Crear Imágenes:
   Desde la terminal en la carpeta del proyecto, ejecuta el comando docker login para iniciar sesión. Luego, utiliza los archivos Dockerfile en el frontend y backend, junto con el archivo docker-compose.yml, para construir las imágenes y configurar los contenedores. Ejecuta los comandos docker compose down seguido de docker compose up para crear los contenedores.

- Desplegar Imágenes:
   Verifica que los contenedores estén corriendo desde Docker Desktop. Finalmente, ingresa a http://localhost:3000/ para acceder a la aplicación web.
