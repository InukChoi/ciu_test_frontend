<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;
const post = ref({
  title: "",
  writer: "",
  content: "",
  comments: [
    { writer: "", content: "" },
  ]
});

const newComment = ref({ writer: "", content: "" });

const addComment = () => {
  if (newComment.value.writer && newComment.value.content) {
    post.value.comments.push({
        writer: newComment.value.writer,
      text: newComment.value.content
    });
    newComment.value.writer = "";
    newComment.value.content = "";
  }
};
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">게시글 상세 조회</h1>
    <div class="border p-4 rounded-md">
      <h2 class="text-xl font-semibold">{{ post.title }}</h2>
      <p class="text-gray-500">작성자: {{ post.writer }}</p>
      <p class="mt-4">{{ post.content }}</p>
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-semibold">댓글</h3>
      <ul class="border p-2 rounded-md mt-2">
        <li v-for="(comment, index) in post.comments" :key="index" class="border-b p-2">
          <p class="text-sm text-gray-600">{{ comment.writer }}</p>
          <p>{{ comment.content }}</p>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h3 class="text-lg font-semibold">댓글 작성</h3>
      <div class="flex space-x-2 mb-2">
        <input v-model="newComment.writer" placeholder="작성자를 입력하세요" class="border p-2 rounded-md w-3/4">
        <button @click="addComment" class="bg-blue-400 text-white px-4 py-2 rounded-md ml-auto">댓글 작성</button>
        
      </div>
      <textarea v-model="newComment.content" placeholder="댓글을 입력하세요" class="border p-2 rounded-md w-full"></textarea>
    </div>
    <div class="flex justify-end mt-4">
      <router-link to="/" class="bg-blue-500 text-white px-4 py-2 rounded-md">목록으로</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>