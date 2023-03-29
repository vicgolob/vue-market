<script setup>
import { RouterView } from 'vue-router'
import { PageComponent, HeaderComponent } from './components'
import CartProvider from './Providers/CartProvider.vue'
</script>

<template>
  <CartProvider>
    <q-layout style="height: 110px; position: relative">
      <HeaderComponent />
      <PageComponent>
        <RouterView />
      </PageComponent>
    </q-layout>
  </CartProvider>
</template>

<style scoped lang="scss"></style>
