#Se usa para especificar que se necesita para para ejecutar el proyecto 
FROM node:12 

# Se crea un directorio de trabajo, crear una carpeta que contendrá los archivos necesarios para que funcione la aplicacion
WORKDIR /app

#pasamos los archivos al contenedor
COPY package*.json ./

#Ejecuta nmp para crear la carpeta node modules
RUN npm install 

#Copia todos los archivos menos los ignore docker 
COPY . .

#Ejecuta 
CMD ["npm", "start" ]