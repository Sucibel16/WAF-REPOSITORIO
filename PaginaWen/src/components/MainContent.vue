<template>
  <main>
    <h2>Catálogo de Computadoras</h2>
    
    <AdvancedFilters :categories="categories" @filters-changed="applyFilters" />

    <div class="product-list">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="product-card"
      >
        <img :src="`https://picsum.photos/seed/${product.id}/300/200`" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p class="category">Categoría: {{ product.category }}</p>
        <p>{{ product.description }}</p>
        <p class="price">Precio: ${{ product.price.toFixed(2) }}</p>
        <p class="popularity">Popularidad: {{ product.popularity }}/5</p>
      </div>
    </div>
  </main>
</template>

<script>
import AdvancedFilters from './AdvancedFilters.vue'

export default {
  name: 'MainContent',
  components: {
    AdvancedFilters
  },
  data() {
    return {
      activeFilters: {},
      products: [
        { id: 1, name: 'MacBook Pro', category: 'Laptops', price: 1999.99, description: 'Potente laptop para profesionales', popularity: 5 },
        { id: 2, name: 'Dell XPS', category: 'Laptops', price: 1499.99, description: 'Laptop delgada y ligera', popularity: 4 },
        { id: 3, name: 'iMac', category: 'Desktops', price: 2499.99, description: 'Todo en uno para diseñadores', popularity: 4 },
        { id: 4, name: 'HP Pavilion', category: 'Desktops', price: 899.99, description: 'Desktop para uso diario', popularity: 3 },
        { id: 5, name: 'Lenovo ThinkPad', category: 'Laptops', price: 1299.99, description: 'Laptop para negocios', popularity: 4 },
        { id: 6, name: 'ASUS ROG', category: 'Gaming', price: 1799.99, description: 'Laptop para gaming de alto rendimiento', popularity: 5 },
        { id: 7, name: 'Alienware Aurora', category: 'Gaming', price: 2799.99, description: 'Desktop para gaming extremo', popularity: 5 },
        { id: 8, name: 'Mac Mini', category: 'Desktops', price: 699.99, description: 'Compacto y potente', popularity: 3 },
      ]
    }
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
    filteredProducts() {
      return this.products
        .filter(product => 
          (!this.activeFilters.category || product.category === this.activeFilters.category) &&
          product.price <= this.activeFilters.maxPrice &&
          product.popularity >= this.activeFilters.minPopularity &&
          (this.activeFilters.search === '' || product.name.toLowerCase().includes(this.activeFilters.search.toLowerCase()))
        )
        .sort((a, b) => {
          if (this.activeFilters.sortBy === 'name') return a.name.localeCompare(b.name);
          if (this.activeFilters.sortBy === 'price') return a.price - b.price;
          if (this.activeFilters.sortBy === 'popularity') return b.popularity - a.popularity;
          return 0;
        });
    }
  },
  methods: {
    applyFilters(filters) {
      this.activeFilters = filters;
    }
  }
}
</script>

<style scoped>
main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.product-card .category {
  font-style: italic;
  color: #666;
}

.product-card .price {
  font-weight: bold;
  color: #007bff;
}

.product-card .popularity {
  color: #28a745;
}
</style>