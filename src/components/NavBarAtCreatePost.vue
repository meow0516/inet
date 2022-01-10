<template>
  <nav
    class="flex justify-content-between fixed bg-white top-0 left-0 z-1 border-bottom-1 border-200"
  >
    <div class="menu-main flex align-items-center">
      <div class="logo">
        <router-link :to="{ path: RoutePath.home }">
          <img src="../assets/inetlogo.png" alt="logo" />
        </router-link>
      </div>
      <div class="mx-2 font-bold">Create Post</div>
    </div>
    <div @click="confirmExit">
      <i class="pi pi-times text-3xl mx-2 py-2"></i>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { RoutePath } from '../router/Routes';

const router = useRouter()
function confirmExit() {
  let leavePage: boolean = confirm('Do you want to leave the page?')
  if (leavePage) {
    router.push('/')
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
img {
  height: 40px;
}
nav {
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
@media (max-width: 768px) {
  nav {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}
</style>
