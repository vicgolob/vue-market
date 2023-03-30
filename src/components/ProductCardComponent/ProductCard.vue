<script setup>
import { defineProps, inject, ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  productId: {
    type: Number,
    required: true
  }
})

const hover = ref(false)

const cart = inject('cart')

const addToCart = () => {
  cart.addToCart({
    id: props.productId,
    title: props.title
  })
}
</script>
<template>
  <q-card class="my-card" :id="productId">
    <div class="img-container-container">
      <q-img
        :src="props.src"
        class="img-container"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ props.title }}
        </div>
      </q-img>
      <div class="buttons-container" :class="{ hover: hover }">
        <q-btn class="q-px-sm q-mr-sm" label="Agregar al carrito" @click="addToCart" />
        <q-btn class="q-px-sm" label="Ver producto" />
      </div>
    </div>
  </q-card>
</template>
