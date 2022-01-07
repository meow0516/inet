<template>
  <form class="flex justify-content-center py-4" @submit.prevent="createAccount">
    <div class="login-info w-6 flex flex-column">
      <h1 class="mb-2">Create new account</h1>

      <label for="username">Username</label>
      <InputText id="username" type="text" v-model="inputNewUsername" class="mb-3" />

      <label for="password">Password</label>
      <InputText id="password" type="password" v-model="inputNewPassword" class="mb-3" />

      <Button type="submit" label="Create Account" class="mb-3" />

      <div>
        Already have an account?
        <router-link to="/login">
          <span>Log in</span>
        </router-link>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import UserApi from '../apis/user'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const router = useRouter()

let inputNewUsername = ref('')
let inputNewPassword = ref('')

async function createAccount() {
  try {
    await UserApi.create(inputNewUsername.value, inputNewPassword.value);
    router.push('/')
  } catch (error: any) {
    console.log(error.response)
  }
}
</script>

<style scoped>
</style>
