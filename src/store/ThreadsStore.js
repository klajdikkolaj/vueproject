import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {useAuthStore} from "@/store/AuthStore";
import {usePostsStore} from "@/store/PostsStore";
import {useUsersStore} from "@/store/UsersStore";
import {useForumsStore} from "@/store/ForumsStore";
import router from "@/router";
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
            if (thread.id && threadIndex !== -1) {
                this.threads[threadIndex] = thread;
            } else {
                this.threads.push(thread);
            }

            // (APPEND THREAD TO USER) add thread to the user
            const usersStore = useUsersStore();
            const user = usersStore.users.find((user) => user.id === userId);
            user.threads = user.threads || [];
            user.threads.push(id);

            // (APPEND THREAD TO FORUM) add thread to the forum
            const forums = useForumsStore();
            forums.threads = forums.threads || [];
            forums.threads.push(id);

            // (DISPATCH CREATE POST) create the post
            const {createPost} = usePostsStore();
            createPost({text, threadId: id});

            try {
                await router.push({name: 'Thread', params: {id: id}});
            } catch (error) {
                console.error("Navigation failed:", error);
            }
            return  this.threads.find((thread) => thread.id === id);
        },
        async updateThread({ title, text, threadId }) {
            console.log("params: ",title,text,threadId)
            const thread = this.getThread(threadId)
            console.log("thread in store: ",thread)
            const postsStore = usePostsStore();
            const post = postsStore.getPostById(thread.posts[0]);
            const newThread = { ...thread, title };
            const newPost = { ...post, text };

            // SET POST
            const postsIndex = postsStore.findPostIndex(post.id)
            if (post.id && postsIndex !== -1) {
                postsStore[postsIndex] = post;
            } else {
                postsStore.push(post);
            }
            console.log(postsIndex)
            console.log("postsStore",postsStore)

            // SET THREAD
            const threadIndex = this.threads.findIndex((t) => t.id === thread.id);
            if (thread.id && threadIndex !== -1) {
                this.threads[threadIndex] = thread;
            } else {
                this.threads.push(thread);
            }


            console.log(newThread)
            return newThread;
        },
    }
})