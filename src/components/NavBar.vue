<template>
  <nav
    class="flex justify-content-between fixed bg-white top-0 left-0 z-1 border-bottom-1 border-200"
  >
    <div class="menu-main flex">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/inetlogo.png" alt="logo" />
        </router-link>
      </div>
      <div class="search mx-2">
        <span class="p-input-icon-right">
          <InputText type="text" class="search-bar" />
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
        <Button label="Create Post" class="p-button-outlined btn-create" />
      </router-link>
      <i class="pi pi-search text-3xl mx-2 py-2 search-icon" />
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
nav {
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.search-bar {
  width: 20rem;
}
.search-icon {
  display: none;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  nav {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  button {
    font-size: 1em;
  }
  .search {
    display: none;
  }
  .search-icon {
    display: block;
  }
  .btn-create {
    display: none;
  }
}
</style>
