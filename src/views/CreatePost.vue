<template>
  <div class="flex justify-content-center py-4 surface-50 page-container">
    <div class="w-6 px-4">
      <InputText
        type="text"
        class="p-inputtext-lg w-full text-sm"
        placeholder="Image URL"
        v-model="imageUrl"
      />
      <InputText
        type="text"
        class="p-inputtext-lg w-full"
        placeholder="New Post Title Here..."
        v-model="title"
        @click="showGuide"
      />
      <Editor
        v-model="content"
        editorStyle="height: 500px"
        placeholder="Write your post content here..."
        @click="showGuide"
      />
      <div class="my-3">
        <Button label="Publish" @click="submitPost" />
      </div>
    </div>
    <div class="w-2 px-2">guideeeee</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Button from 'primevue/button';


let title = ref('')
let content = ref('')
let imageUrl = ref('')

function showGuide() {
}

function submitPost() {
  axios.post('http://172.16.240.53:45816/api/inet/articles', {
    "authorId": 1,
    "coverImage": imageUrl.value,
    "title": title.value,
    "body": content.value
  }).then((response) => console.log(response))
}
</script>

<style scoped lang="scss">
.page-container {
  min-height: calc(100vh - 53px);
}
</style>
