<script setup>
import {defineProps} from "vue";
import {useThreadsStore} from "@/store/ThreadsStore";
import {useForumsStore} from "@/store/ForumsStore";
import router from "@/router";
import ThreadEditor from "@/components/ThreadEditor.vue";
import {usePostsStore} from "@/store/PostsStore";
const props = defineProps({
  threadId:{
    type:String,
    required:true
  }
});
const thread = useThreadsStore().getThread(props.threadId)
console.log(props.threadId)
if (!thread || !thread.posts) {
  console.error("Thread not found or doesn't have posts");
}
console.log(thread)

const post = usePostsStore().getPostById(thread.posts[0])
console.log(post)
const text = post.text
console.log(text)
console.log(thread.title)
function cancel(){
  try {
    router.push({name: 'Thread', params: {id: props.threadId}});
  } catch (error) {
    console.error("Navigation failed:", error);
  }
}
async function save({title, text}){
  const threadId = await props.threadId
  console.log("in save:" ,threadId)
  await useThreadsStore().updateThread({title, text, threadId})
}
</script>
<template>
  <div class="col-full push-top">
    <h1>
      Edit thread in <i>{{ thread.title}}</i>
    </h1>
    <ThreadEditor :text="text" :title="thread.title" @save = "save" @cancel="cancel"/>
  </div>
</template>
