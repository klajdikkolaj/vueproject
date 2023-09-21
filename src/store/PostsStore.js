import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {useThreadsStore} from "@/store/ThreadsStore";
import {useAuthStore} from "@/store/AuthStore";
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
            const foundPost = state.posts.find(p =>p.id === id)
            if (!foundPost) {
                return {}
            }
            return foundPost
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
