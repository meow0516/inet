<template>
  <div class="flex justify-content-center py-4 surface-50 page-container">
    <div class="w-6 px-4">
      <InputText
        type="text"
        class="p-inputtext-lg w-full text-sm"
        placeholder="CoverImage URL"
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
      <div>
        啟用自動儲存
        <Checkbox v-model="isLocalStorageOn" :binary="true" />
        {{ localStorageStatus }}
        {{ saveStatus }}
      </div>
    </div>
    <div class="w-2 px-2">guideeeee</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';

import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

let title = ref(localStorage.getItem('storageTitle') || '')
let content = ref(localStorage.getItem('storageContent') || '')
let imageUrl = ref('')
let isLocalStorageOn = ref(true)
let localStorageStatus = computed(() => isLocalStorageOn.value ? "已啟用" : "")
let saveStatus = ref('')

setInterval(storeToLocalStorage, 10000)

function storeToLocalStorage() {
  if (isLocalStorageOn.value) {
    localStorage.setItem('storageTitle', title.value)
    localStorage.setItem('storageContent', content.value)
    saveStatus.value = '已自動儲存'
    setTimeout(() => saveStatus.value = '', 5000)
  }
  else {
    clearLocalStorage()
  }
}
function clearLocalStorage() {
  localStorage.removeItem('storageTitle');
  localStorage.removeItem('storageContent');
}

function showGuide() {
}

function submitPost() {
  axios.post('http://172.16.240.53:45816/api/inet/articles', {
    "authorId": 1,
    "coverImage": imageUrl.value,
    "title": title.value,
    "body": content.value
  }).then((response) => {
    console.log(response)
    clearLocalStorage()
  })
}
</script>

<style scoped lang="scss">
.page-container {
  min-height: calc(100vh - 53px);
}
</style>
