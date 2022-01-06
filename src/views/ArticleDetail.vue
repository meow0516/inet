<template>
  <div class="flex flex-column align-items-center surface-50 py-4 article-container">
    <div class="flex mt-6" v-if="isLoading">
      <ProgressSpinner />
    </div>
    <div class="flex flex-column border-1 border-400 surface-0 article" v-else>
      <div
        class="bg-no-repeat bg-cover bg-center h-15rem"
        :style="{ backgroundImage: 'url(' + article.coverImage + ')' }"
      ></div>
      <div class="flex pt-5 px-5">
        <img
          :src="article.author.avatar ? article.author.avatar : defaultAvatar"
          alt="avatar"
          class="avatar m-2"
        />
        <div class="created-info flex flex-column justify-content-center">
          <p
            class="author m-0"
          >{{ article.author.name ? article.author.name : article.author.username }}</p>
          <p class="created-time m-0 text-700 text-sm">{{ time }}發表</p>
        </div>
      </div>
      <article class="px-5">
        <h2 class="title">{{ article.title }}</h2>
        <p class="text-sm">{{ article.body }}</p>
      </article>
      <div class="comments px-5 pb-5">
        <h2>Discussion</h2>
        <div class="flex pb-5">
          <div class="mr-3">
            <img src="https://via.placeholder.com/50x50" alt="avatar" class="avatar" />
          </div>
          <InputText type="text" class="w-full" />
        </div>
        <div class="flex">
          <div class="mr-3">
            <img src="https://via.placeholder.com/50x50" alt="avatar" class="avatar" />
          </div>
          <div
            class="body"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore ad facere ea temporibus reiciendis consectetur repudiandae reprehenderit accusantium tempore!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';
import ArticleAPI from '../apis/article';

import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import { ArticleInfo } from '../types/ArticleInfo';
import defaultAvatar from '../assets/default_avatar.png'

let isLoading = ref(true)
let id = Number(useRoute().params.id)
let article = reactive(<ArticleInfo>{})
let time = ref()

onMounted(async () => {
  const response = await ArticleAPI.getById(id);
  Object.assign(article, response.data)
  isLoading.value = false;
  time.value = moment(article.createdAt).format('YYYY-MM-DD HH:mm')
})
</script>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  width: 50px;
  height: auto;
}
.article-container {
  min-height: calc(100vh - 86px);
}
.article {
  width: 50%;
}
@media (max-width: 1024px) {
  .article {
    width: 60%;
  }
  .avatar {
    border-radius: 50%;
    width: 30px;
    height: auto;
  }
}
@media (max-width: 768px) {
  .article {
    width: 100%;
  }
}
</style>
