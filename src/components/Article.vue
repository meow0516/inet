<template>
  <div class="article-card flex justify-content-center my-2">
    <div class="w-6 flex flex-column text-left border-round border-1 border-500">
      <router-link :to="`/articles/` + id">
        <div
          class="bg-no-repeat bg-cover bg-center h-15rem"
          :style="{ backgroundImage: 'url(' + coverImage + ')' }"
        ></div>
        <div class="flex px-5 pt-5">
          <img :src="avatar" alt="avatar" class="avatar m-2" />
          <div class="created-info flex flex-column justify-content-center">
            <p class="author m-0">{{ author }}</p>
            <p class="created-time m-0">{{ convertCreatedAt }}發表</p>
          </div>
        </div>
        <div class="article-info px-5">
          <h3 class="article-title font-bold">
            <a href="#">{{ title }}</a>
          </h3>
          <p class="article-abstract">{{ body }}</p>
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
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef, toRefs } from 'vue';
import { ArticleInfo } from '../types/ArticleInfo';
import moment from 'moment'

let props = defineProps<{
  article: ArticleInfo
}>()
let article = toRef(props, 'article')
let { title, body, views, likes, createdAt, coverImage, id } = toRefs(article.value)
let author = article.value.author.name || article.value.author.username
let avatar = article.value.author.avatar
let convertCreatedAt = moment(createdAt.value).format('YYYY-MM-DD HH:mm')

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
</style>
