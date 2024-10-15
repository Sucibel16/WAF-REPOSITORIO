<!-- src/components/CharacterFilters.vue -->
<template>
  <div class="filters">
    <!-- Campo de búsqueda por nombre -->
    <input 
      type="text" 
      v-model="searchName" 
      @input="onSearchChange" 
      placeholder="Buscar por nombre..."
      class="search-input"
    />
    
    <!-- Menú desplegable para filtrar por estado -->
    <select v-model="selectedStatus" @change="onStatusChange" class="status-select">
      <option value="">Todos los estados</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconocido</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CharacterFilters',
  props: {
    // Valores iniciales para los filtros
    initialName: {
      type: String,
      default: '',
    },
    initialStatus: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchName: this.initialName, // Modelo para el campo de búsqueda
      selectedStatus: this.initialStatus, // Modelo para el menú desplegable
    };
  },
  methods: {
    /**
     * Emite un evento cuando cambia el campo de búsqueda.
     */
    onSearchChange() {
      this.$emit('update-filters', {
        name: this.searchName,
        status: this.selectedStatus,
      });
    },
    /**
     * Emite un evento cuando cambia el filtro de estado.
     */
    onStatusChange() {
      this.$emit('update-filters', {
        name: this.searchName,
        status: this.selectedStatus,
      });
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.status-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
