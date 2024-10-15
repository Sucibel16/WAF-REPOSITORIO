<template>
  <div class="advanced-filters">
    <h3>Filtros Avanzados</h3>
    <div class="filter-group">
      <label>Categoría:</label>
      <select v-model="filters.category" @change="emitFilters">
        <option value="">Todos</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Ordenar por:</label>
      <select v-model="filters.sortBy" @change="emitFilters">
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
        <option value="popularity">Popularidad</option>
      </select>
    </div>
    
    <div class="filter-group">
      <label>Precio máximo: ${{ filters.maxPrice }}</label>
      <input type="range" v-model.number="filters.maxPrice" :min="0" :max="3000" step="100" @input="emitFilters">
    </div>

    <div class="filter-group">
      <label>Popularidad mínima:</label>
      <select v-model.number="filters.minPopularity" @change="emitFilters">
        <option v-for="n in 5" :key="n" :value="n">{{ n }} estrellas</option>
      </select>
    </div>

    <div class="filter-group">
      <label>Búsqueda:</label>
      <input type="text" v-model="filters.search" @input="emitFilters" placeholder="Buscar por nombre...">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedFilters',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filters: {
        category: '',
        sortBy: 'name',
        maxPrice: 3000,
        minPopularity: 1,
        search: ''
      }
    }
  },
  methods: {
    emitFilters() {
      this.$emit('filters-changed', this.filters)
    }
  }
}
</script>

<style scoped>
.advanced-filters {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.filter-group {
  margin-bottom: 10px;
}

.filter-group label {
  display: block;
  margin-bottom: 5px;
}

select, input[type="text"] {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

input[type="range"] {
  width: 100%;
}
</style>