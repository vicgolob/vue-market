<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCardComponent/ProductCard.vue'

const products = ref([])
const slide = ref(1)
fetch('https://fakestoreapi.com/products?limit=4')
  .then((response) => response.json())
  .then((data) => {
    products.value = data
  })

// Función para dividir el array en sub-arrays de dos elementos
const chunk = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
</script>

<template>
  <div>
    <h1>Productos destacados</h1>
  </div>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="green"
      navigation
      padding
      arrows
      height="380px"
      class="bg-grey-9 shadow-2 rounded-borders"
    >
      <q-carousel-slide
        v-for="(productChunk, index) in chunk(products, 2)"
        :name="index"
        :key="index"
        class="column no-wrap"
      >
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="card-container">
            <ProductCard
              :src="productChunk[0].image"
              :title="productChunk[0].title"
              :price="productChunk[0].price"
            />
            <ProductCard
              :src="productChunk[1].image"
              :title="productChunk[1].title"
              :price="productChunk[1].price"
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style>
@import url('./ShowcaseView.scss');
</style>
