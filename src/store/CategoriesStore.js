import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {findById} from "@/helpers";
export const useCategoriesStore = defineStore('CategoriesStore', {
    state: ()=>{
        return{
            categories: sourceData.categories
        }
    },
    getters:{
        getCategoryById: (state) => (id) => {
            return findById(state.categories,id)
        }
    },
    actions:{}

})
