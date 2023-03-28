<script setup>
import { RouterView } from 'vue-router'
import { PageComponent, HeaderComponent } from './components'
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
