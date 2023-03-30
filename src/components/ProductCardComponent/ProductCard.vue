<script setup>
import { inject, ref } from 'vue'

defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

const hover = ref(false)

const { addToCart } = inject('cart')
</script>
<template>
  <q-card class="my-card" :key="id">
    <div class="img-container-container">
      <q-img
        :src="image"
        class="img-container"
        @mouseover="() => (hover = true)"
        @mouseout="() => (hover = false)"
      >
        <div class="absolute-bottom text-subtitle2 text-center">{{ title }} - {{ price }} €</div>
      </q-img>
      <div class="buttons-container" :class="{ hover: hover }">
        <q-btn
          class="q-px-sm q-mr-sm"
          label="Agregar al carrito"
          @click="() => addToCart($props)"
        />
        <q-btn class="q-px-sm" label="Ver producto" />
      </div>
    </div>
  </q-card>
</template>
