<template>
  <div class="flex justify-content-center">
    <div class="login-info w-6 flex flex-column">
      <div class="title">Welcome to inet Community</div>

      <label for="username">Username</label>
      <InputText id="username" type="text" v-model="value" />

      <label for="password">Password</label>
      <InputText id="password" type="password" v-model="value" />

      <Button label="Submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
</script>

<style scoped>
</style>
