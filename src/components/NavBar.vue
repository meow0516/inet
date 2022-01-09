<template>
  <nav
    class="flex justify-content-between fixed bg-white top-0 left-0 z-1 border-bottom-1 border-200"
  >
    <div class="menu-main flex align-items-center">
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
    <div v-if="!isLogIn" class="menu-account flex align-items-center">
      <router-link to="/login">
        <Button label="Log in" class="p-button-text" />
      </router-link>
      <router-link to="/create-account">
        <Button label="Create account" class="p-button-outlined" />
      </router-link>
    </div>
    <div v-else class="menu-account flex align-items-center">
      <router-link to="/create-post">
        <Button label="Create Post" class="p-button-outlined btn-create" />
      </router-link>
      <i class="pi pi-search text-3xl mx-2 py-2 search-icon" />
      <i class="pi pi-bell text-3xl mx-2 py-2"></i>
      <Button
        type="button"
        label="Toggle"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        class="bg-white border-none"
      >
        <img
          :src="store.state.userInfo.avatar || defaultAvatar"
          alt="avatar"
          class="avatar"
        />
      </Button>
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';

import defaultAvatar from '../assets/default_avatar.png';
import { useStore } from 'vuex';

const store = useStore();
let isLogIn = computed(() => (store.state.userInfo.username ? true : false));

const menu = ref();
const items = ref([
  {
    label: 'Menu',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
          console.log('abc');
        },
      },
      {
        label: 'Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
          signOut();
        },
      },
    ],
  },
]);
const toggle = (event: Event) => {
  menu.value.toggle(event);
};

function signOut() {
  store.commit('signOut');
}

onMounted(() => store.commit('getUserInfoFromStorage'));
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
img {
  height: 40px;
  &.avatar {
    border-radius: 50%;
  }
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
