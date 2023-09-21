<script setup xmlns="http://www.w3.org/1999/html">
defineProps( {
  forums: {
    type: Array,
    required: true
  },
  categoryName:{
    type: String,
    default:"Forums"
  },
  catId:{
    required:false,
    type:String
  }
})

function forumThreadsWord(forum){
  if (forum.threads?.length){
    return forum.threads?.length > 1 ? "threads" : "thread"
  }
  return "no threads"
}
</script>

<template>
  <div class="col-full">
    <div class="forum-list">

      <h2 class="list-title">
        <router-link v-if="catId" :to="{name:'Category', params:{id:catId}}">{{categoryName}}</router-link>
        <span v-else>{{categoryName}}</span>

      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">

        <div class="forum-details">
          <router-link class="text-xlarge" :to="{name:'Forum', params:{id: forum.id}}">{{ forum.name }}</router-link>

          <p>{{forum.description}}</p>

        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ forum.threads?.length }}</span>
            {{ forumThreadsWord(forum)}}
          </p>
        </div>

        <div class="last-thread">
          <img class="avatar" src="https://i.imgur.com/WPSrfGm.jpg" alt="">
          <div class="last-thread-details">
            <a href="thread.html">What is the best animal joke y...</a>
            <p class="text-xsmall">By <a href="profile.html">Blossom</a>, 16 hours ago</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
