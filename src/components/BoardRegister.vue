<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const newTitle = ref('');
const newContent = ref('');
const newAuthor = ref('');
const router = useRouter();

const submitPost = () => {
    if (newTitle.value.trim() !== '' && newContent.value.trim() !== '' && newAuthor.value.trim() !== '') {
        // 여기에 게시글 저장 로직 추가 (Vuex, Pinia, API 등 활용 가능)
        alert('게시글이 등록되었습니다.');
        router.push('/');
    }
};
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">게시글 작성</h1>

        <div class="mb-4 flex space-x-2">
            <input v-model="newTitle" type="text" placeholder="제목을 입력하세요" class="border p-2 flex-grow rounded-md" />
            <input v-model="newAuthor" type="text" placeholder="작성자를 입력하세요" class="border p-2 w-1/4 rounded-md" />
        </div>

        <textarea v-model="newContent" placeholder="내용을 입력하세요" class="border p-2 w-full rounded-md mb-2"></textarea>

        <div class="flex justify-end">
            <button @click="submitPost" class="mt-2 bg-blue-500 text-white p-2 rounded-md">등록</button>
        </div>
    </div>
</template>

<style scoped></style>