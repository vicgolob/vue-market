<script>
import { ref } from 'vue'

export default {
  name: 'ProductsList',
  setup() {
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

    return { products, slide, chunk }
  }
}
</script>

<template>
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
            <q-card class="my-card" v-if="productChunk[0]">
              <div class="img-container-container">
                <q-img
                  :src="productChunk[0].image"
                  class="img-container"
                  @mouseover="productChunk[0].hover = true"
                  @mouseout="productChunk[0].hover = false"
                >
                  <div class="absolute-bottom text-subtitle2 text-center">
                    {{ productChunk[0].title }}
                  </div>
                </q-img>
                <div class="buttons-container" :class="{ hover: productChunk[0].hover }">
                  <q-btn class="q-px-sm q-mr-sm" label="Agregar al carrito" />
                  <q-btn class="q-px-sm" label="Ver producto" />
                </div>
              </div>
            </q-card>
            <q-card class="my-card" v-if="productChunk[1]">
              <div class="img-container-container">
                <q-img
                  :src="productChunk[1].image"
                  class="img-container"
                  @mouseover="productChunk[1].hover = true"
                  @mouseout="productChunk[1].hover = false"
                >
                  <div class="absolute-bottom text-subtitle2 text-center">
                    {{ productChunk[1].title }}
                  </div>
                </q-img>
                <div class="buttons-container" :class="{ hover: productChunk[1].hover }">
                  <q-btn class="q-px-sm q-mr-sm" label="Agregar al carrito" />
                  <q-btn class="q-px-sm" label="Ver producto" />
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex: 1;
  position: relative;
}
.my-card {
  flex: 1;
  margin-left: 20px;
  position: relative;
}
.img-container {
  max-height: 300px;
  max-width: 100%;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.my-card:hover .buttons-container {
  opacity: 1;
  pointer-events: auto;
}

.my-card button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 6px 12px;
  margin-right: 10px;
  cursor: pointer;
}

.my-card .btn-product {
  background-color: white;
  color: black;
  border: none;
}
</style>
