<script setup>
import { inject } from 'vue'
const { getTotalItems, getTotalPrice } = inject('cart')
</script>

<template>
  <q-header elevated class="q-py-md bg-transparent">
    <q-toolbar class="q-px-none content">
      <router-link to="/showcase">
        <img src="logo.png" height="70" />
      </router-link>
      <q-space />
      <div class="row justify-between example-container">
        <div class="col-auto" v-rt>
          <router-link to="/cart" class="row items-center">
            <q-icon name="shopping_cart" color="primary" size="42px" />
            <q-badge floating color="red" rounded>{{ getTotalItems() }}</q-badge>
          </router-link>
        </div>
        <div class="col-auto" v-rt>
          <div class="text-center">
            <p>{{ getTotalPrice() }} €</p>
            <q-btn outline rounded color="primary" label="Mi carrito" size="12px" to="/cart" />
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
@import url('./HeaderComponent.scss');
</style>
