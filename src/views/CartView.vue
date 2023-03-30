<script setup>
import { inject } from 'vue'
const { cart, removeFromCart } = inject('cart')
</script>

<template>
  <div>
    <h1>Cart Page</h1>
    <q-card>
      <h2>Carrito</h2>
      <q-list dense>
        <q-item v-for="item in cart" :key="item.id">
          <q-item-section>{{ item.title }} - {{ item.price }} €</q-item-section>
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
    </q-card>
  </div>
</template>
