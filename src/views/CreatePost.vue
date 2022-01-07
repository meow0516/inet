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
        class="p-inputtext-lg w-full"
        placeholder="New Post Title Here..."
        v-model="title"
        @click="showTitleGuide"
      />
      <Editor
        editorStyle="height: 500px"
        placeholder="Write your post content here..."
        v-model="content"
        @click="showContentGuide"
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
      <div v-show="imageUrl.length > 0">
        <img :src="imageUrl" alt="image preview" class="w-5rem" />
      </div>
      <div class="relative" :style="guideY">
        <h3>{{ guideTitle }}</h3>
        <p class="text-700">{{ guideContent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import ArticleAPI from '../apis/article';

const localStorageKeys = {
  title: 'storageTitle',
  content: 'storageContent',
};

const router = useRouter()
const store = useStore()
let title = ref(localStorage.getItem(localStorageKeys.title) || '')
let content = ref(localStorage.getItem(localStorageKeys.content) || '')
let imageUrl = ref('')

let isLocalStorageOn = ref(true)
let localStorageStatus = computed(() => isLocalStorageOn.value ? "已啟用" : "")
let saveStatus = ref('')

let guideTitle = ref('')
let guideContent = ref('')
let guideY = ref('')

let intervalId: NodeJS.Timer | undefined = undefined;

onMounted(() => {
  intervalId = setInterval(storeToLocalStorage, 60000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
});

function storeToLocalStorage() {
  if (isLocalStorageOn.value) {
    localStorage.setItem(localStorageKeys.title, title.value)
    localStorage.setItem(localStorageKeys.content, content.value)
    saveStatus.value = '已自動儲存'
    let timeoutId = setTimeout(() => {
      saveStatus.value = ''
      clearTimeout(timeoutId);
    }, 5000)
  }
  else {
    clearLocalStorage()
  }
}

function clearLocalStorage() {
  localStorage.removeItem('storageTitle');
  localStorage.removeItem('storageContent');
}

function showTitleGuide() {
  guideY.value = 'top: 30px'
  guideTitle.value = 'Writing a Great Post Title'
  guideContent.value = 'Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence. Use keywords where appropriate to help ensure people can find your post by search.'
}

function showContentGuide() {
  guideY.value = 'top: 150px'
  guideTitle.value = 'Editor Basics'
  guideContent.value = 'Use Markdown to write and format posts. You can use Liquid tags to add rich content such as Tweets, YouTube videos, etc. In addition to images for the post\'s content, you can also drag and drop a cover image'
}

async function submitPost() {
  if (title.value.length === 0) alert('please input title')
  else {
    const response = await ArticleAPI.create(store.state.userInfo.id, imageUrl.value, title.value, content.value)
    let id = response.data.id
    router.push(`/articles/${id}`)
    clearLocalStorage()
  }
}
</script>

<style scoped lang="scss">
.page-container {
  min-height: calc(100vh - 53px);
}
</style>
