<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Acerca</router-link></li>
      <li><router-link to="/services">Servicios</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s; /* Suaviza la animación */
}

nav ul li a:hover {
  background-color: #333;
  color: #fff; /* Cambia el texto a blanco */
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
}

nav ul li.active a {
  background-color: #4CAF50;
  color: white;
}
</style>