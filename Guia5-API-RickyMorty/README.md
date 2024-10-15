# Proyecto: Mostrador de Personajes de Rick y Morty

# Descripción: Este proyecto es una aplicación web interactiva desarrollada con Vue.js que permite a los usuarios explorar y filtrar personajes de la serie Rick y Morty. Utiliza la API pública de Rick y Morty para obtener datos de los personajes y ofrece funcionalidades de búsqueda y filtrado.

# Funciones:
- Mostrar una cuadrícula de personajes de Ricky y Morty.
- Buscar personajes por nombre.
- Filtrar personajes por estado(Vivo, Muerto, Desconocido)
- Páginación para navegar a través de las páginas.

# Tecnologías utilizadas:
- Vue.j 3: Contribuye a crear una interfaz de usuario reactiva y eficiente
- Axios: Facilita la comunicación con la API de Ricky Morty
- API Ricky y Morty: Fuente de datos de los personajes mostrados
- Node

# Instalación de dependencias:
- Para instalar dependencias necesarias por node: npm install

- Instalar Vue Cli: npm install -g @vue/cli

- Instalar Axios: npm install axios
     
# Principales Archivos:

- App.vue: componente raíz de la aplicación 

## src/components/
- CharacterList.vue: Maneja la lógica principal para mostrar y paginar la lista de      |  personajes, usando axios para hacer peticiones a la API.

- CharacterFilters.vue: Maneja los filtros de busqueda y estado.


# Instalación 
## Pasos:
- Clonar el Repositorio, presionando en "Code" copia el enlace y con la ayuda de Git Bash, Pegar el enlace y ejecuta el comando.
- Instalar las dependencias entrando desde la terminal a la carpeta de el proyecto y ejecutando npm install.
- Luego ejecuta el comando npm run serve donde te mostrará el puerto donde se está corriendo la aplicación

## Uso de Docker:
- Por si aún no se tiene instalado [Guía para instalar Docker](https://www.youtube.com/watch?v=cWuirzMOwwg).
- Abre Docker Destop e inicia sesión con el usuario y contraseña. 
- Para crear una imagen inicia una terminal dentro del proyecto y ejecuta docker login.
-Ejecuta el comando "docker build -t nombre_proyecto:latest.
- Una vez finalizado debería aparecer la imagen y el contenedor dentro DockerDesktop, elegimos el puerto donde lo queremos ejecutar y lo abrimos en una pestaña del navegador web.
- Ahora se debe subir la imagen a Docker Hub, Abre una terminal y ejecuta el siguiente comando docker push usuario/nombrecarpeta:latest, lo que nos creara un repositorio donde podremos acceder a nuestro proyecto. 

# Actividad complementaria: 
- Al correr el proyecto se muestra el proyecto con la mejora en la interfaz ya que las tarjetas contienen bordes redondeados y sombras.
- Usa propiedades prev y next para cargar las diferentes páginas de la API utilizando botones.
- Implementación de un campo de busqueda por estado(vivo-muerto-desconocido) además de por nombre.
- Diseño Responsivo.
- Imagen subida a Docker-Hub: https://hub.docker.com/r/sucibel/guia5