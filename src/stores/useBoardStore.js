import { defineStore } from 'pinia';
import axios from 'axios';

export const useBoardStore = defineStore('board', {
    state: () => ({}),
    actions: {
        async fetchPostList(page, size) {
            const response = await axios.get("/api/board/list?page="+page+"&size="+size);
            return response;
        },
        async fetchPostDetail(idx) {
            const response = await axios.get("/api/board/read/"+idx);
            return response;
        },
        async registerPost(post) {
            const response = await axios.post("/api/board/register", post);
            return response;
        }
    }
});