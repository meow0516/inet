<template>
  <article class="flex justify-content-center mb-2">
    <div class="flex flex-column text-left border-round border-1 border-500 surface-0 article">
      <router-link :to="`/articles/` + id" class="mb-5">
        <img :src="coverImage" class="h-15rem w-full cover-image" alt="coverImage" />
      </router-link>
      <div class="flex px-5">
        <img :src="avatar || defaultAvatar" alt="avatar" class="avatar m-2" />
        <div class="created-info flex flex-column justify-content-center">
          <p class="author m-0">{{ author }}</p>
          <p class="created-time m-0 text-700 text-sm">{{ convertCreatedAt }}發表</p>
        </div>
      </div>
      <div class="article-info px-5">
        <router-link :to="`/articles/` + id">
          <h2 class="article-title font-bold">{{ title }}</h2>
        </router-link>
        <p class="article-abstract text-700 text-sm">{{ body }}</p>
      </div>
      <div class="flex px-5">
        <p class="pr-6">
          <i class="pi pi-eye"></i>
          {{ views }} 次瀏覽
        </p>
        <p>
          <i class="pi pi-heart"></i>
          {{ likes }} 個like
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, toRef, toRefs } from 'vue';
import { ArticleInfo } from '../types/ArticleInfo';
import moment from 'moment'
import defaultAvatar from '../assets/default_avatar.png'

let props = defineProps<{
  article: ArticleInfo
}>()
let article = toRef(props, 'article')
let { title, body, views, likes, createdAt, coverImage, id } = toRefs(article.value)
let author = article.value.author.name || article.value.author.username
let avatar = article.value.author.avatar
let convertCreatedAt = computed(() => moment(createdAt.value).format('YYYY-MM-DD HH:mm'));

</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.avatar {
  border-radius: 50%;
  width: 50px;
  height: auto;
}
.cover-image {
  object-fit: cover;
}
.article {
  width: 50%;
}
@media (max-width: 1024px) {
  .article {
    width: 60%;
  }
}
@media (max-width: 768px) {
  .article {
    width: 90%;
  }
}
</style>
