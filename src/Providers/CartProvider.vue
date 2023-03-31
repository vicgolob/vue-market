<script setup>
import { provide, ref, readonly, toRefs } from 'vue'
import DISCOUNT_CODES from '@/mocks/discountCodesMock'
import { parseWithTwoDecimals } from '@/utils'

const initiateCart = () => {
  const value = localStorage.getItem('cart')
  return value ? JSON.parse(value) : []
}

const cart = ref(initiateCart())

const discount = ref(0)

const addToCart = (item) => {
  const newItems = [...cart.value, item]
  updateCart(newItems)
}

const updateCart = (newItems) => {
  cart.value = newItems
  localStorage.setItem('cart', JSON.stringify(newItems))
}

const removeFromCart = (id) => {
  const newItems = cart.value.filter((item) => item.id !== id)
  updateCart(newItems)
}

const clearCart = () => {
  cart.value = []
  localStorage.removeItem('cart')
}

const getTotalItems = () => cart.value.length

const isProductInCart = (id) => !!cart.value.find((item) => item.id === id)

const isCartEmpty = () => cart.value.length === 0

const getTotalPrice = () => {
  let total = cart.value.reduce(function (partial, item) {
    return partial + item.price
  }, 0)
  return parseWithTwoDecimals(total)
}

const getDiscount = (code) => {
  const discountFactor = DISCOUNT_CODES[code] ?? 0
  discount.value = discountFactor
}

const applyDiscount = () => {
  const totalWithDiscount = getTotalPrice() * discount.value
  return parseWithTwoDecimals(totalWithDiscount)
}

const getTotalAfterDiscount = () => parseWithTwoDecimals(getTotalPrice() - applyDiscount())

provide(
  'cart',
  toRefs(
    readonly({
      cart,
      discount,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalItems,
      isProductInCart,
      isCartEmpty,
      getTotalPrice,
      getDiscount,
      applyDiscount,
      getTotalAfterDiscount
    })
  )
)
</script>

<template>
  <slot />
</template>
