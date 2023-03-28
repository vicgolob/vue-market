<script>
import { ref } from 'vue'

export default {
  name: 'ProductsList',
  setup() {
    const products = ref([])

    fetch('https://fakestoreapi.com/products?limit=4')
      .then((response) => response.json())
      .then((data) => {
        products.value = data
      })

    return { products }
  }
}
</script>

<template>
  <div>
    <h1>Productos</h1>
    <ul>
      <li v-for="product in products" :key="product.id" style="color: white">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <img :src="product.image" width="20" />
      </li>
    </ul>
  </div>
</template>
