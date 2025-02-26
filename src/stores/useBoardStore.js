import { defineStore } from 'pinia';
import axios from 'axios';

export const useBoardStore = defineStore('board', {
    state: () => ({}),
    actions: {
        async fetchPostList(page, size) {
            const response = await axios.get("/api/board/list?page="+page+"&size="+size);
            return response;
        },
    }
});