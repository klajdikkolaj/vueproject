<!--<script setup>-->

<!--</script>-->
<script setup>
import { reactive} from "vue";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import AppDate from "@/components/AppDate.vue";
import {usePostsStore} from "@/store/PostsStore";
import {useUsersStore} from "@/store/UsersStore";

dayjs.extend(relativeTime)

defineProps( {
  threads: {
    type: Array,
    required: true
  }
})

const posts= reactive(usePostsStore().posts)
const users= reactive(useUsersStore().users)


function userById (userId){
  return users.find(p => p.id === userId)
}

</script>
<template>
  <div class="col-full">
    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'Thread', params: { id: thread.id } }">{{ thread.title }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>,  <app-date :timestamp="thread.publishedAt"/>.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length -1 }} replies
          </p>
          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>

<style scoped>

</style>
