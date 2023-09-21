<script setup>
import ThreadList from "@/components/ThreadList.vue";
import {computed} from "vue";
import {useForumsStore} from "@/store/ForumsStore";
import {useThreadsStore} from "@/store/ThreadsStore";

const { id } = defineProps(['id']);
const storeForums = useForumsStore().forums
const storeThreads = useThreadsStore().threads
const forum = computed(() => storeForums.find(forum => forum.id === id))
const threads = computed(() => storeThreads.filter(thread => thread.forumId === id))

</script>

<template>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <router-link :to="{name:'NewThread', params:{forumId:forum.id}}" class="btn-green btn-small">Start a thread</router-link>
      </div>
    </div>

    <div class="col-full">
    <ThreadList :threads="threads"/>
    </div>

</template>

<style scoped>

</style>
