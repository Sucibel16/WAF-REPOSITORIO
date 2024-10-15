Este proyecto tiene como objetivo desplegar una página web estática utilizando Docker y Nginx. A través de esta práctica, aprenderás a crear un contenedor Docker que sirva una página HTML mediante Nginx, facilitando el despliegue y la administración de aplicaciones web.
## Tecnologías Utilizadas
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
- **Nginx**: Servidor web de código abierto utilizado para servir contenido web, actuar como proxy inverso y balanceador de carga.
## Requisitos Previos
- Tener [Docker](https://www.docker.com/products/docker-desktop) instalado en tu máquina.
- Familiaridad básica con la terminal o línea de comandos.
## Instrucciones para ejecutarlo 
### 1. Crear la Carpeta del Proyecto
Crea una carpeta en tu escritorio llamada Prueba-Docker y crea un archivo llamado index.html con el contenido que deseas mostrar.
### 2. Crear el Archivo Dockerfile
En la misma carpeta, crea un archivo sin extensión llamado Dockerfile y añade el siguiente contenido:
dockerfile
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
##3. Construir la Imagen Docker
Abre una terminal en el directorio donde se encuentran tu Dockerfile y index.html, y ejecuta el siguiente comando:
docker build -t my-web-page .
##4. Ejecutar el Contenedor
docker run -d -p 8080:80 my-web-page
