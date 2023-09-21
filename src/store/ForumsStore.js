import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {findById} from "@/helpers";
export const useForumsStore = defineStore('ForumsStore', {
    state: ()=>{
        return{
            forums: sourceData.forums,
            threads: sourceData.threads
        }
    },
    getters: {
        getForumByCategoryId: (state) => (id) => {
            return state.forums.find(f => f.categoryId === id)
        },
        getForumById: (state) => (id) => {
            return findById(state.forums,id)
        },
    },
    actions:{}

})
