<template>
  <div class="pg-container flex flex-column surface-50">
    <NavBar v-if="notInCreatePostPage" />
    <div class="router-view overflow-auto flex-grow-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { RoutePath } from './router/Routes';

const route = useRoute();
let notInCreatePostPage = computed(() => route.path !== RoutePath.createpost);
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
.pg-container {
  height: 100vh;
  overflow: hidden;
}
</style>
