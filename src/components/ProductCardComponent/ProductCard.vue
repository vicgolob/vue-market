<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const hover = ref(false)
</script>
<template>
  <q-card class="my-card">
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
        <q-btn class="q-px-sm q-mr-sm" label="Agregar al carrito" />
        <q-btn class="q-px-sm" label="Ver producto" />
      </div>
    </div>
  </q-card>
</template>
