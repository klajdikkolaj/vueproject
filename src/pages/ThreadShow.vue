<script setup>
import {computed} from "vue";
import { defineProps } from "vue";
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";
import {usePostsStore} from "@/store/PostsStore";
import {useThreadsStore} from "@/store/ThreadsStore";

const threadsStore = useThreadsStore();
const postsStore = usePostsStore();

const posts = postsStore.posts;

const { id } = defineProps(['id']);

const thread = computed(() => threadsStore.getThread(id))
const threadPosts = computed(()=>posts.filter(p => p.threadId === id))


function addPost(eventData) {
  const post = {
    id: 'gggg' + Math.random(), // Use your ID generation here
    threadId: id,
    ...eventData.post,
  }
// 2. Use the createPost action
  postsStore.createPost(post);
}

</script>

<template>
  <div v-if="thread" >

    <h1>{{ thread.title }}</h1>

    <post-list :posts="threadPosts"></post-list>
    <post-editor @save="addPost"/>

  </div>
  <div v-else class="col-full text-center">
      <h1>Thread Not Found</h1>
      <router-link :to="{name:'Home'}">Go home</router-link>
  </div>
</template>

<style scoped>
</style>
