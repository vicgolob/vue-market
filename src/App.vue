<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import PageComponent from '@/components/PageComponent/PageComponent.vue'
</script>

<template>
  <q-layout style="height: 110px; position: relative">
    <HeaderComponent />
    <PageComponent>
      <RouterView />
    </PageComponent>
  </q-layout>
</template>

<style scoped lang="scss"></style>
