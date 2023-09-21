<script setup xmlns="http://www.w3.org/1999/html">
import {usePostsStore} from "@/store/PostsStore";
import {useThreadsStore} from "@/store/ThreadsStore";

const props = defineProps({
  user:{
    type: Object,
    required:true
  }
})
const postStore = usePostsStore()
const threadsStore = useThreadsStore()
const userPosts = postStore.getUserPosts(props.user.id)
const authUserThreads = threadsStore.getUserThreads(userPosts.id)

</script>

<template>
<div>
  <div class="profile-card">
    <p class="text-center">
      <img
          :src="props.user.avatar"
          :alt="`${props.user.name} profile picture`"
          class="avatar-xlarge"
      />
    </p>

    <h1 class="title">{{ props.user.username }}</h1>

    <p class="text-lead">{{props.user.name }}</p>

    <p class="text-justify">{{ props.user.bio || "No bio specified." }}</p>

    <span class="online">{{ props.user.username }} is online</span>

    <div class="stats">
      <span>{{ userPosts.length }} posts</span>
      <span>{{ authUserThreads.length }} threads</span>
    </div>

    <hr />

    <p v-if="props.user.website" class="text-large text-center">
      <i class="fa fa-globe"></i>
      <a :href="props.user.website">{{ user.website }}</a>
    </p>
  </div>
  <div class="text-center">
    <hr />
    <router-link :to="{name:'UserEdit'}" class="btn-green btn-small"
    >Edit Profile</router-link
    >
  </div>
  </div>

</template>

<style scoped>

</style>
