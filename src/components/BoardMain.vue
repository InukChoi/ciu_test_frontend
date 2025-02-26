<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useBoardStore } from '../stores/useBoardStore';
import { RouterLink } from 'vue-router';

const boardStore = useBoardStore();
const currentPage = ref(1);
const postsPerPage = 5;
const maxVisiblePages = 5;
const paginatedPosts = ref([]);
const totalPages = ref();

watch(currentPage, async () => {
  const response = await boardStore.fetchPostList((currentPage.value-1), postsPerPage);
  paginatedPosts.value = response.data.boards;
  totalPages.value = response.data.total;
})

const visiblePages = computed(() => {
  const total = totalPages.value;
  const half = Math.floor(maxVisiblePages / 2);
  let start = Math.max(1, currentPage.value - half);
  let end = Math.min(total, start + maxVisiblePages - 1);

  if (end - start < maxVisiblePages - 1) {
    start = Math.max(1, end - maxVisiblePages + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

onMounted(async ()=> {
    const response = await boardStore.fetchPostList(0, postsPerPage);
    paginatedPosts.value = response.data.boards;
    totalPages.value = response.data.total;
})
</script>

<template>
    <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">게시판</h1>
    
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border p-2">번호</th>
          <th class="border p-2">제목</th>
          <th class="border p-2">작성자</th>
          <th class="border p-2">댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in paginatedPosts" :key="index" class="border">
          <td class="border p-2 text-center">{{ post.idx }}</td>
          <td class="border p-2 text-center">
            <router-link :to="`/board_detail/${post.idx}`">
              {{ post.title }}
            </router-link>
          </td>
          <td class="border p-2 text-center">{{ post.writer }}</td>
          <td class="border p-2 text-center">{{ post.commentCount }}</td>
        </tr>
      </tbody>
    </table>
    <div class="flex mt-4 justify-end" >
        <router-link to="/board_register" class="bg-blue-500 text-white px-4 py-2 rounded-md">글쓰기</router-link>
    </div>
    
    <div class="flex justify-center mt-4 space-x-2">
      <button @click="prevPage" :disabled="currentPage === 1" 
              class="px-4 py-2 border rounded-md" 
              :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">
        이전
      </button>
      
      <button v-for="page in visiblePages" :key="page" @click="currentPage = page"
              class="px-4 py-2 border rounded-md" 
              :class="{ 'bg-blue-500 text-white': currentPage === page }">
        {{ page }}
      </button>
      
      <button @click="nextPage" :disabled="currentPage === totalPages" 
              class="px-4 py-2 border rounded-md" 
              :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">
        다음
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>