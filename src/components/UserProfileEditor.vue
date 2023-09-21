<script setup>
import {usePostsStore} from "@/store/PostsStore";
import {useThreadsStore} from "@/store/ThreadsStore";
import {useUsersStore} from "@/store/UsersStore";

const props = defineProps({
  user:{
    type: Object,
    required:true
  },
  editMode:{
    type: Boolean,
    default:true
  }
})
const postStore = usePostsStore()
const threadStore = useThreadsStore()
let  activeUser = {...props.user}
const postCount = postStore.getUserPosts(props.user.id).length
const theadNumber  = threadStore.getThread(props.user.id).length
</script>
<template>
  <div class="profile-card">
    <form @submit.prevent="useUsersStore().updateUser(activeUser)">
      <p class="text-center">
        <img
            :src="user.avatar"
            :alt="`${user.name} profile picture`"
            class="avatar-xlarge img-update"
        />
      </p>

      <div class="form-group">
        <input
            v-model="activeUser.username"
            type="text"
            placeholder="Username"
            class="form-input text-lead text-bold"
        />
      </div>

      <div class="form-group">
        <input
            v-model="activeUser.name"
            type="text"
            placeholder="Full Name"
            class="form-input text-lead"
        />
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea
            v-model="activeUser.bio"
            class="form-input"
            id="user_bio"
            placeholder="Write a few words about yourself."
        ></textarea>
      </div>

      <div class="stats">
        <span>{{ postCount }} posts</span>
        <span>{{ theadNumber }} threads</span>
      </div>

      <hr />

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input
            v-model="activeUser.website"
            autocomplete="off"
            class="form-input"
            id="user_website"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input
            v-model="activeUser.email"
            autocomplete="off"
            class="form-input"
            id="user_email"
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input
            v-model="activeUser.location"
            autocomplete="off"
            class="form-input"
            id="user_location"
        />
      </div>

      <div class="btn-group space-between">
        <button @click="useUsersStore().cancel" type="button" class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>


