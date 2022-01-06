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
          <p class="created-time m-0 text-700 text-sm">{{ articleCreatedAt }}發表</p>
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
          <InputText type="text" v-model="commentInput" class="w-10" />
          <Button label="Submit" class="w-2" @click="submitComment" />
        </div>
        <div class="flex my-3" v-for="comment in comments">
          <div class="mr-3">
            <img
              :src="comment.author.avatar ? comment.author.avatar : defaultAvatar"
              alt="avatar"
              class="avatar"
            />
          </div>
          <div class="flex flex-column">
            <p
              class="text-sm m-0 font-semibold"
            >{{ comment.author.name ? comment.author.name : comment.author.username }}</p>
            <p class="text-sm m-0">
              {{ comment.body }}
              <span class="text-sm m-0 text-400">
                &#64;
                {{ moment(comment.createdAt).format('YYYY-MM-DD HH:mm') }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';

import ArticleAPI from '../apis/article';
import CommentAPI from '../apis/comment';

import { ArticleInfo } from '../types/ArticleInfo';
import { Comment } from '../types/Comment'

import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import defaultAvatar from '../assets/default_avatar.png'
import axios from 'axios';

const router = useRouter()

let isLoading = ref(true)
let id = Number(useRoute().params.id)
let article = reactive(<ArticleInfo>{})
let articleCreatedAt = ref()

let comments = ref(<Array<Comment>>[])

let commentInput = ref('')

onMounted(
  async () => {
    const responseArticle = await ArticleAPI.getById(id);
    Object.assign(article, responseArticle.data)
    isLoading.value = false;
    articleCreatedAt.value = moment(article.createdAt).format('YYYY-MM-DD HH:mm')

    const responseComment = await CommentAPI.getById(id)
    comments.value = responseComment.data
  }
)

function submitComment() {
  axios.post('http://172.16.240.53:45816/api/inet/article-comments', {
    "articleId": id,
    "authorId": 1,
    "body": commentInput.value
  }).then((response) => {
    console.log(response)
    commentInput.value = ''
    router.go(0)
  })
}
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
