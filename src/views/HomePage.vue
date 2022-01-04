<template>
  <div class="flex mt-6" v-if="isLoading">
    <ProgressSpinner />
  </div>
  <div v-else>
    <Article v-for="(article, index) in articles" :key="article.id" :article="article" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount } from 'vue'
import Article from '../components/Article.vue'
import { ArticleInfo } from '../types/ArticleInfo'
import axios from 'axios'

import ProgressSpinner from 'primevue/progressspinner';

let isLoading = ref(true)
let articles = reactive(<Array<ArticleInfo>>[])

onBeforeMount(() => {
  axios.get('http://172.16.240.53:45816/api/inet/articles?cursor=0&page=0&size=25').then(response => {
    response.data.forEach((article: ArticleInfo) => {
      articles.push(article)
    });
    isLoading.value = false
  })
})

</script>

<style scoped lang="scss">
</style>
