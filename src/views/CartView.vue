<script setup>
import { inject } from 'vue'
const { cart, removeFromCart, getTotalItems, clearCart } = inject('cart')
</script>

<template>
  <div>
    <h1>Cart Page</h1>
    <q-card style="width: 50%">
      <div style="margin-left: 12px">
        <h2><strong>Carrito</strong></h2>
        <h3 v-if="getTotalItems() == 0">El carrito está vacio</h3>
        <h3 v-else>{{ getTotalItems() }} Artículos</h3>
      </div>
      <q-list dense>
        <q-item v-for="item in cart" :key="item.id">
          <q-item-section>{{ item.title }} - {{ item.price }} €</q-item-section>
          <img :src="item.image" width="70" />
          <q-item-section side>
            <q-btn
              outline
              rounded
              color="primary"
              label="Remove"
              size="14px"
              @click="() => removeFromCart(item.id)"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-btn
        outline
        rounded
        color="red"
        label="Limpiar carrito"
        v-if="getTotalItems() > 0"
        @click="() => clearCart()"
      />
    </q-card>
  </div>
</template>
