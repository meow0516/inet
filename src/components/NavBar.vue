<template>
  <nav class="flex justify-content-between mx-6 my-3">
    <div class="menu-main flex">
      <div class="logo">
        <a href="#">
          <img src="../assets/inetlogo.png" alt="logo" />
        </a>
      </div>
      <div class="search mx-2">
        <span class="p-input-icon-right">
          <InputText type="text" class="w-20rem" />
          <i class="pi pi-search" />
        </span>
      </div>
    </div>
    <div v-if="!isLogIn" class="menu-account flex">
      <router-link to="login">
        <Button label="Log in" class="p-button-text" />
      </router-link>
      <Button label="Create account" class="p-button-outlined" />
    </div>
    <div v-else class="menu-account flex">
      <router-link to="/createpost">
        <Button label="Create Post" class="p-button-outlined" />
      </router-link>
      <i class="pi pi-bell text-3xl mx-2 py-2"></i>
      <i class="pi pi-github text-3xl mx-2 py-2"></i>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

let isLogIn = ref(true).value

</script>

<style scoped>
a {
  text-decoration: none;
}
img {
  height: 40px;
}
</style>
