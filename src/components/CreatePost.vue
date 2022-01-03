<template>
  <div class="flex flex-column align-items-center">
    <div class="w-6">
      <InputText
        type="text"
        class="p-inputtext-lg w-full"
        placeholder="New Post Title Here..."
        v-model="value"
      />
      <Editor v-model="value" editorStyle="height: 320px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
let value: string = ''
</script>

<style scoped lang="scss">
</style>
