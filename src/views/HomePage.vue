<template>
  <div class="flex mt-6" v-if="isLoading">
    <ProgressSpinner />
  </div>
  <div v-else>
    <div class="surface-50 py-4">
      <Article v-for="(article, index) in articles" :key="article.id" :article="article" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Article from '../components/Article.vue'
import { ArticleInfo } from '../types/ArticleInfo'
import ArticleAPI from '../apis/article';

import ProgressSpinner from 'primevue/progressspinner';

let isLoading = ref(true)
let articles = ref(<Array<ArticleInfo>>[])

onMounted(async () => {
  const response = await ArticleAPI.getByQuery();
  articles.value = response.data;
  isLoading.value = false;
})

</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
