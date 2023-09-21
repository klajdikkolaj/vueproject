<script setup>
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
const props = defineProps(['timestamp'])

function diffForHumans(){
  return dayjs.unix(props.timestamp).fromNow()
}
function humanFriendlyDate(){
  return dayjs.unix(props.timestamp).format( 'llll')
}
</script>

<template>
  <span :title="humanFriendlyDate(timestamp)">
    {{diffForHumans(timestamp)}}
  </span>
</template>

<style scoped>

</style>
