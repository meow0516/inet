<template>
  <div class="flex flex-column align-items-center my-2">
    <div class="flex mt-6" v-if="isLoading">
      <ProgressSpinner />
    </div>
    <div class="w-6 flex flex-column border-1 border-400" v-else>
      <div
        class="bg-no-repeat bg-cover bg-center h-15rem"
        :style="{ backgroundImage: 'url(' + article.coverImage + ')' }"
      ></div>
      <div class="flex pt-5 px-5">
        <img :src="article.author.avatar" alt="avatar" class="avatar m-2" />
        <div class="created-info flex flex-column justify-content-center">
          <p
            class="author m-0"
          >{{ article.author.name ? article.author.name : article.author.username }}</p>
          <p class="created-time m-0">{{ article.createdAt }}發表</p>
        </div>
      </div>
      <article class="px-5">
        <h1 class="title">{{ article.title }}</h1>
        <p>{{ article.body }}</p>
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
import { onBeforeMount, ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import { ArticleInfo } from '../types/ArticleInfo';

let isLoading = ref(true)
let id = useRoute().params.id
let article = reactive({}) as ArticleInfo

onBeforeMount(() => {
  axios.get('http://172.16.240.53:45816/api/inet/articles/' + id).then(response => {
    Object.assign(article, response.data)
    isLoading.value = false
  })
})
</script>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  width: 50px;
  height: auto;
}
</style>
