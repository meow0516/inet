<template>
  <div class="article-card flex justify-content-center my-2">
    <div class="w-6 flex flex-column text-left border-round border-1 border-500">
      <div class="article-img bg-no-repeat bg-cover bg-center h-15rem"></div>
      <div class="article-info p-5">
        <h3 class="article-title font-bold">
          <a href="#">This is title</a>
        </h3>
        <p
          class="article-abstract"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis optio blanditiis ipsam minus? Dolorem aut cupiditate ex tempore ut. Earum nisi soluta odio a maxime vitae in dicta modi eveniet et quo rerum eos, veniam libero maiores repudiandae natus! Eius, rerum est qui quae ipsa at corporis nostrum. Delectus!</p>
        <div class="author-info flex">
          <img src="https://via.placeholder.com/50x50" alt="avatar" class="avatar mr-2" />
          <p class="post-info post-time">2021-10-15 發表&ensp;|&ensp;</p>
          <p class="post-info browse-count">48763 次瀏覽&ensp;|&ensp;</p>
          <p class="post-info like-count">87 個like</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.article-img {
  background-image: url("https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
}
.avatar {
  border-radius: 50%;
}
</style>
