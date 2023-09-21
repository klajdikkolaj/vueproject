import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {useAuthStore} from "@/store/AuthStore";
import {usePostsStore} from "@/store/PostsStore";
import {useUsersStore} from "@/store/UsersStore";
import {useForumsStore} from "@/store/ForumsStore";
import router from "@/router";
import {navigateToThread, updateOrAppend} from "@/helpers";
export const useThreadsStore = defineStore('ThreadsStore', {
    state: ()=>{
        return{
            threads: sourceData.threads,
        }
    },
    getters:{
        getThread:(state)=> (id) =>{
            const foundThreads = state.threads.find(thread => thread.id ===id)
            if(!foundThreads){
                return []
            }
            return foundThreads
        },
        getUserThreads: (state)=>(userId)=>{
            return state.threads.filter(thread=>thread.userId === userId)
        },
        getUserThreadsLength:()=>(userId)=>{
            return this.getUserThreads(userId).length
        }

    },
    actions: {
        async createThread(text, title, forumId) {
            const id = 'gggg' + Math.random()
            const userId = useAuthStore().authId
            const publishedAt = Math.floor(Date.now() / 1000)

            const thread = {
                id,
                title,
                forumId,
                userId,
                publishedAt,
                posts: []
            }

            // (SET THREAD) add thread to threads
            const threadIndex = this.threads.findIndex((t) => t.id === thread.id);
            const usersStore = useUsersStore();


            if (thread.id && threadIndex !== -1) {
                this.threads[threadIndex] = thread;
            } else {
                this.threads.push(thread);
            }

            updateOrAppend(this.threads, thread);
            updateOrAppend(usersStore.users.find(u => u.id === userId).threads, id);
            updateOrAppend(useForumsStore().threads, id);

            await navigateToThread(thread.id)
            return  this.threads.find((thread) => thread.id === id);
        },
        async updateThread({ title, text, threadId }) {
            const thread = this.getThread(threadId);
            const postsStore = usePostsStore();
            const post = postsStore.getPostById(thread.posts[0]);

            // Update the post directly
            post.text = text;
            thread.title = title;

            updateOrAppend(postsStore.posts, post);
            updateOrAppend(this.threads, thread);
            await navigateToThread(threadId)
            return thread;
        },

    }
})
