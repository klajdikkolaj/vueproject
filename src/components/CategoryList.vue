<script setup>
import {useForumsStore} from "@/store/ForumsStore";
const forums = useForumsStore().forums
 defineProps({
   categories:{
     type:Array,
     required:true
   }
 })
 function getForumsForCategory(category){
  return forums.filter(f => f.categoryId === category.id)
 }

</script>

<template>
    <ForumList :catId="category.id" v-for="category in categories" :key="category.id" :forums="getForumsForCategory(category)" :category-name = "category.name"/>
</template>

<style scoped>

</style>
