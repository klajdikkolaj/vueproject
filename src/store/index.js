// import {defineStore} from "pinia";
// import sourceData from '@/data.json'
// import {nextTick} from "vue";
// export const useDataStore = defineStore('Datastore', {
//     state: ()=>{
//       return {
//           sourceData
//       }
//     },
//     getters:{
//         categories(){
//             return this.sourceData.categories
//         },
//         forums(){
//             return this.sourceData.forums
//         },
//         users(){
//             return this.sourceData.users
//         },
//         threads(){
//             return this.sourceData.threads
//         },
//         posts(){
//             return this.sourceData.posts
//         },
//     },
//     actions:{
//         addPost(post, threadId){
//             const thread = this.threads.find(thread => thread.id === threadId)
//             nextTick(() => {
//                  this.posts.push(post);
//             });
//             thread.posts.push(post.id)
//         }
//     }
// })
