<template>
  <NavBar />
  <Article v-for="index in 5" :key="index" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './NavBar.vue';
import Article from './Article.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
</style>
