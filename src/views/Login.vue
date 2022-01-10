<template>
  <div v-if="errorCode" class="flex justify-content-center bg-pink-100">
    無效帳號或密碼
  </div>
  <form
    class="flex justify-content-center py-4"
    @submit.prevent="handleFormSubmit"
  >
    <div class="login-info w-6 flex flex-column">
      <h1 class="mb-2">Welcome to inet Community</h1>

      <label for="username">Username</label>
      <InputText
        id="username"
        name="username"
        type="text"
        v-model="inputUsername"
        class="mb-3"
      />

      <label for="password">Password</label>
      <InputText
        id="password"
        name="password"
        type="password"
        v-model="inputPassword"
        class="mb-3"
      />

      <Button type="submit" label="Log in" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import AuthApi from '../apis/auth';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
let inputUsername = ref('');
let inputPassword = ref('');
let errorCode = ref('');

async function handleFormSubmit() {
  try {
    const { data } = await AuthApi.login({
      username: inputUsername.value,
      password: inputPassword.value,
    });
    let userInfo = Object.assign({}, data);
    store.commit('saveUserInfo', userInfo);
    store.commit('saveUserToStorage', JSON.stringify(userInfo));
    router.push('/');
  } catch (error: any) {
    errorCode.value = error.response.data.errorCode;
  }
}
</script>

<style scoped></style>
