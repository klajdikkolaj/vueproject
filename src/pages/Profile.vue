<script setup>
import {usePostsStore} from "@/store/PostsStore";
import PostList from "@/components/PostList.vue";
import {useUsersStore} from "@/store/UsersStore";
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserProfileEditor from "@/components/UserProfileEditor.vue";
const postStore = usePostsStore()
const userStore = useUsersStore()
const user = userStore.getAuthUser
const userPosts = postStore.getUserPosts(user.id)

defineProps({
  editMode:{
    type:Boolean,
    default: false
  }
})


</script>

<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard v-if="!editMode" :user="user"/>
        <UserProfileEditor v-else :user="user" />
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>
