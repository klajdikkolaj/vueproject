<script setup>
import {defineProps} from "vue";
import {useThreadsStore} from "@/store/ThreadsStore";
import {useForumsStore} from "@/store/ForumsStore";
import router from "@/router";
import ThreadEditor from "@/components/ThreadEditor.vue";
const props = defineProps({
  forumId:{
    type:String,
    required:true
  }
});
const forum = useForumsStore().getForumById(props.forumId)
function cancel(){
  try {
     router.push({name: 'Forum', params: {id: props.forumId}});
  } catch (error) {
    console.error("Navigation failed:", error);
  }
}
function save({title, text}){
   useThreadsStore().createThread(title, text, forum.id)
}
</script>
<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
<ThreadEditor @save = "save" @cancel="cancel"/>

  </div>
</template>
