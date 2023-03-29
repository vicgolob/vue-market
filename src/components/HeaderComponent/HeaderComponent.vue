<script setup>
import { inject } from 'vue'
const { getTotalItems } = inject('cart')
</script>
<template>
  <q-header elevated class="q-py-md bg-transparent">
    <q-toolbar class="q-px-none content">
      <img src="logo.png" height="70" />
      <q-space />
      <div>
        <q-icon name="shopping_cart" color="primary" size="32px" />
        <q-badge floating color="red" rounded>{{ getTotalItems() }}</q-badge>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
