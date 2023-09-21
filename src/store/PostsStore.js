import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {useThreadsStore} from "@/store/ThreadsStore";
import {useAuthStore} from "@/store/AuthStore";
import {findById} from "@/helpers";
export const usePostsStore = defineStore('PostsStore', {
    state: ()=>{
        return{
            posts: sourceData.posts
        }
    },
    getters: {
        getUserPosts: (state) => (userId) => {
            const foundPosts = state.posts.filter(p => p.userId === userId)
            if (!foundPosts) {
                return []
            }
            return foundPosts
        },
        getUserPostsNumber: () => (userId) => {
            return this.getUserPosts(userId).length
        },
        getPostById: (state) => (id)=>{
            return findById(state.posts,id)
        },
        findPostIndex: (state)=>(postId)=>{
            const postIndex = state.posts.findIndex(p => p.id === postId)
            return postIndex
        }

            },
    actions:{
        async createPost (post){
            post.id = 'gggg' + Math.random()
            post.userId = await useAuthStore().authId
            this.posts.push(post)
            post.publishedAt= Math.floor(Date.now()/1000)
            const thread = useThreadsStore().threads.find(thread =>thread.id === post.threadId)
            thread.posts.push(post.id)
        }
    }

})
