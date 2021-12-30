<template>
  <div class="article-card flex justify-content-center">
    <div class="article-info w-6 flex flex-column text-left">
      <h3 class="article-title">
        <a href="#">This is title</a>
      </h3>
      <p
        class="article-abstract"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis optio blanditiis ipsam minus? Dolorem aut cupiditate ex tempore ut. Earum nisi soluta odio a maxime vitae in dicta modi eveniet et quo rerum eos, veniam libero maiores repudiandae natus! Eius, rerum est qui quae ipsa at corporis nostrum. Delectus!</p>
      <div class="author-info flex">
        <img src="https://via.placeholder.com/50x50" alt="thumbnail" class="thumbnail" />
        <p class="post-time">2021-10-15 發表</p>
        <p class="browse-count">48763 次瀏覽</p>
        <p class="like-count">87 個like</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  color: #42b983;
}
img {
  border-radius: 50%;
}
</style>
