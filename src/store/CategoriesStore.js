import { defineStore} from "pinia";
import sourceData from '@/data.json'
export const useCategoriesStore = defineStore('CategoriesStore', {
    state: ()=>{
        return{
            categories: sourceData.categories
        }
    },
    getters:{
        getCategoryById: (state) => (id) => {
            return state.categories.find(category => category.id === id);
        }
    },
    actions:{}

})
