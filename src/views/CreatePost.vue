<template>
  <div class="flex justify-content-center py-4 surface-50 page-container">
    <div class="w-6 px-4">
      <InputText
        type="text"
        class="p-inputtext-lg w-full text-sm mb-3"
        placeholder="CoverImage URL"
        v-model="imageUrl"
      />
      <InputText
        type="text"
        class="p-inputtext-lg w-full input-title"
        placeholder="New Post Title Here..."
        v-model="title"
        @click="showGuide"
      />
      <Editor
        editorStyle="height: 500px"
        class="input-content"
        placeholder="Write your post content here..."
        v-model="content"
        @click="showGuide"
      >
        <template #toolbar>
          <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
          </span>
        </template>
      </Editor>
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
    <div class="w-2 px-2">
      <div class="img-preview" :class="{ displayPreviewImg: displayPreviewImg }">
        <img :src="imageUrl" alt="image preview" />
      </div>
      <div class="guide" :style="guideY">
        <h3>{{ guideTitle }}</h3>
        <p class="text-700">{{ guideContent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

const router = useRouter()
let title = ref(localStorage.getItem('storageTitle') || '')
let content = ref(localStorage.getItem('storageContent') || '')
let imageUrl = ref('')
let isLocalStorageOn = ref(true)
let localStorageStatus = computed(() => isLocalStorageOn.value ? "已啟用" : "")
let saveStatus = ref('')
let guideTitle = ref('')
let guideContent = ref('')
let guideY = ref('')

setInterval(storeToLocalStorage, 60000)

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

function showGuide(e: any) {
  let classList = e.target.classList
  if (classList.contains('input-title')) {
    guideY.value = 'top: 30px'
    guideTitle.value = 'Writing a Great Post Title'
    guideContent.value = 'Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence. Use keywords where appropriate to help ensure people can find your post by search.'
  }
  else {
    guideY.value = 'top: 150px'
    guideTitle.value = 'Editor Basics'
    guideContent.value = 'Use Markdown to write and format posts. You can use Liquid tags to add rich content such as Tweets, YouTube videos, etc. In addition to images for the post\'s content, you can also drag and drop a cover image'
  }
}

function submitPost() {
  if (title.value.length === 0) alert('please input title')
  else {
    axios.post('http://172.16.240.53:45816/api/inet/articles', {
      "authorId": 2,
      "coverImage": imageUrl.value,
      "title": title.value,
      "body": content.value
    }).then((response) => {
      clearLocalStorage()
      let id = response.data.id
      router.push(`/articles/${id}`)
    })
  }
}

let displayPreviewImg = computed(() => imageUrl.value.length !== 0)
</script>

<style scoped lang="scss">
.page-container {
  min-height: calc(100vh - 53px);
}
.guide {
  position: relative;
}

.img-preview {
  display: none;
  img {
    width: 100px;
    height: auto;
  }
}
.displayPreviewImg {
  display: block;
}
</style>
