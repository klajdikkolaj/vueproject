<script setup>
import AppDate from "@/components/AppDate.vue";
import {useUsersStore} from "@/store/UsersStore";

const props = defineProps( ['posts'])
const userById = useUsersStore().getAuthUser

</script>

<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info">
        <a href="#" class="user-name">
          {{ (userById.name) || 'Unknown' }}
        </a>
        <a href="#">
          <img class="avatar-large" :src="(userById.avatar) || 'path_to_default_avatar.png'" alt="">
        </a>
      </div>

      <div class="post-content">
        <div>
          <p>
            {{post.text}}
          </p>
        </div>
        <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a>
      </div>
        <app-date :timestamp="post.publishedAt"/>
    </div>
  </div>

</template>

