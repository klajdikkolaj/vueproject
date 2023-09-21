<script setup>
import { nextTick, ref} from "vue";

const text = ref("")

const emit = defineEmits(['save'])

function save(){
  const post = {
    text: text.value,
  }
  nextTick(() => {
    emit('save', {post})
  });
  text.value = ""
}
</script>

<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue-outlined">Submit post</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
