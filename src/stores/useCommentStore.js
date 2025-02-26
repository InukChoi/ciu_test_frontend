import { defineStore } from 'pinia';
import axios from 'axios';

export const useCommentStore = defineStore('comment', {
    state: () => ({}),
    actions: {
        async registerPost(comment) {
            const response = await axios.post("/api/comment/register", comment);
            return response;
        }
    }
});