<script setup>

import {computed} from "vue";
import ForumList from "@/components/ForumList.vue";
import {useCategoriesStore} from "@/store/CategoriesStore";
import {useForumsStore} from "@/store/ForumsStore";

const props =defineProps({
  id:{
    type:String,
    required:true
  }
})
const categoriesStore = useCategoriesStore()

const category = computed(()=>categoriesStore.getCategoryById(props.id))
const forums = computed(()=>useForumsStore().getForumById(props.id))

</script>

<template>
<h1>{{category.name}}</h1>
  <ForumList :forums="forums" :category-name="category.name"/>
</template>

<style scoped>

</style>
