<template>
  <div class="services container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Nuestros servicios</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">{{ service.name }}</h2>
        <p class="mb-4">{{ service.description }}</p>
        <a href="#" class="text-blue-500 hover:underline">Más información</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        { id: 1, name: 'Reparación de computadoras', description: 'Servicio de reparación para todo tipo de computadoras de escritorio y portátiles.' },
        { id: 2, name: 'Instalación de software', description: 'Instalación y configuración de sistemas operativos, programas y aplicaciones.' },
        { id: 3, name: 'Mantenimiento preventivo', description: 'Servicio de mantenimiento para optimizar el rendimiento de tu equipo.' },
        { id: 4, name: 'Recuperación de datos', description: 'Recuperación de información de discos duros dañados o formateados.' },
        { id: 5, name: 'Asesoría técnica', description: 'Asesoramiento personalizado para la compra de equipos y componentes.' },
        { id: 6, name: 'Configuración de redes', description: 'Instalación y configuración de redes domésticas y empresariales.' }
      ]
    }
  }
}
</script>