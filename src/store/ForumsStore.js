import { defineStore} from "pinia";
import sourceData from '@/data.json'
export const useForumsStore = defineStore('ForumsStore', {
    state: ()=>{
        return{
            forums: sourceData.forums
        }
    },
    getters: {
        getForumByCategoryId: (state) => (id) => {
            return state.forums.find(f => f.categoryId === id)
        },
        getForumById: (state) => (id) => {
            return state.forums.find(f => f.id === id)
        },
    },
    actions:{}

})
