<script setup >
import {defineComponent} from 'vue';

import CategoryList from "@/components/CategoryList.vue";
import {useCategoriesStore} from "@/store/CategoriesStore";
import {storeToRefs} from "pinia";

defineComponent({
  components: {
    CategoryList
  },
})

const {categories} = storeToRefs(useCategoriesStore())

</script>

<template>
  <h1>Welcome to the Categories</h1>
  <CategoryList :categories="categories"/>
</template>

