<template>
  <div v-if="currentPath !== '/create-post'">
    <NavBar />
  </div>
  <div v-else>
    <NavBarAtCreatePost />
  </div>
  <div class="router-view">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue'
import NavBarAtCreatePost from './components/NavBarAtCreatePost.vue';

const route = useRoute()
let currentPath = computed(() => { return route.path })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
.router-view {
  position: relative;
  top: 53px;
}
</style>
