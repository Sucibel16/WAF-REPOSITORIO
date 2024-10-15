<!-- src/components/CharacterList.vue -->
<template>
  <div>
    <!-- Título centrado -->
    <h1 class="title">Personajes de Rick y Morty</h1>
    
    <!-- Componente de filtros -->
    <CharacterFilters 
      :initialName="filters.name" 
      :initialStatus="filters.status"
      @update-filters="updateFilters"
    />
    
    <!-- Mostrar mensaje de carga si está cargando -->
    <div v-if="loading">
      Cargando personajes...
    </div>
    
    <!-- Mostrar mensaje si no hay personajes -->
    <div v-else-if="characters.length === 0 && !loading">
      No se encontraron personajes con los filtros aplicados.
    </div>
    
    <!-- Grid de personajes -->
    <div class="character-grid" v-else>
      <!-- Generar una tarjeta por cada personaje -->
      <div v-for="character in characters" :key="character.id" class="character-card">
        <!-- Imagen del personaje -->
        <img :src="character.image" :alt="character.name" />
        
        <!-- Información del personaje (nombre, estado, especie) -->
        <div class="character-info">
          <p><strong>{{ character.name }}</strong></p> <!-- Nombre del personaje -->
          <p><strong>Estado:</strong> {{ character.status }}</p> <!-- Estado del personaje -->
          <p><strong>Especie:</strong> {{ character.species }}</p> <!-- Especie del personaje -->
        </div>
      </div>
    </div>
    
    <!-- Contenedor de botones de paginación -->
    <div class="pagination" v-if="characters.length > 0">
      <!-- Botón para página anterior -->
      <button 
        @click="fetchCharacters(prevPage)" 
        :disabled="!prevPage"
        class="pagination-button"
      >
        Anterior
      </button>
      
      <!-- Botón para página siguiente -->
      <button 
        @click="fetchCharacters(nextPage)" 
        :disabled="!nextPage"
        class="pagination-button"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CharacterFilters from './CharacterFilters.vue'; // Ruta de importación corregida

export default {
  name: 'CharacterList',
  components: {
    CharacterFilters,
  },
  data() {
    return {
      characters: [], // Array para almacenar los personajes obtenidos del API
      nextPage: null,  // URL de la siguiente página
      prevPage: null,  // URL de la página anterior
      filters: {        // Objeto para almacenar los filtros actuales
        name: '',
        status: '',
      },
      loading: false,   // Estado de carga
    };
  },
  mounted() {
    this.fetchCharacters(); // Obtener la primera página de personajes al montar el componente
  },
  methods: {
    /**
     * Método para actualizar los filtros desde el componente de filtros.
     * @param {Object} newFilters - Objeto con los nuevos filtros.
     */
    updateFilters(newFilters) {
      this.filters = { ...newFilters };
      // Al aplicar nuevos filtros, reiniciar a la primera página
      this.fetchCharacters();
    },
    /**
     * Método para obtener personajes desde la API.
     * @param {String} url - URL de la página a obtener. Si no se proporciona, se usa la URL por defecto con los filtros.
     */
    async fetchCharacters(url = null) {
      this.loading = true; // Iniciar estado de carga
      try {
        let apiUrl = 'https://rickandmortyapi.com/api/character';
        
        // Si se proporciona una URL (para paginación), usarla directamente
        if (url) {
          apiUrl = url;
        } else {
          // Si no, construir la URL con los filtros actuales
          const params = new URLSearchParams();
          if (this.filters.name) {
            params.append('name', this.filters.name);
          }
          if (this.filters.status) {
            params.append('status', this.filters.status);
          }
          apiUrl = `${apiUrl}?${params.toString()}`;
        }
        
        // Llamada al API de Rick and Morty para obtener los personajes
        const response = await axios.get(apiUrl);
        
        // Asignar los personajes al array characters
        this.characters = response.data.results;
        
        // Almacenar las URLs de la siguiente y anterior página
        this.nextPage = response.data.info.next;
        this.prevPage = response.data.info.prev;
      } catch (error) {
        console.error('Error al obtener personajes:', error); // Manejo de errores
        this.characters = []; // Limpiar personajes en caso de error
        this.nextPage = null;
        this.prevPage = null;
      } finally {
        this.loading = false; // Finalizar estado de carga
      }
    },
  },
};
</script>

<style scoped>
/* Centrar el título */
.title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Estilos para el grid de personajes */
.character-grid { 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espacio entre tarjetas */
}

/* Estilos para cada tarjeta de personaje */
.character-card {
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra básica para las tarjetas */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 220px; /* Ajuste del tamaño de las tarjetas */
}

/* Efectos al pasar el cursor sobre la tarjeta */
.character-card:hover {
  transform: translateY(-5px); /* Efecto de elevación */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Sombra más fuerte en hover */
}

/* Estilos para la imagen del personaje */
.character-card img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

/* Efecto zoom al pasar el cursor sobre la imagen */
.character-card:hover img {
  transform: scale(1.05);
}

/* Contenedor de información del personaje */
.character-info {
  padding: 10px;
  text-align: center;
}

/* Estilos para los párrafos de información */
.character-info p {
  margin: 5px 0; /* Espacio entre párrafos */
}

/* Contenedor de botones de paginación */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Espacio superior */
}

/* Estilos para los botones de paginación */
.pagination-button {
  background-color: #007bff; /* Color de fondo azul */
  color: white; /* Texto en blanco */
  border: none;
  padding: 10px 20px;
  margin: 0 10px; /* Espacio entre botones */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Cambiar el color de fondo al pasar el cursor */
.pagination-button:hover {
  background-color: #0056b3;
}

/* Estilos para botones deshabilitados */
.pagination-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
