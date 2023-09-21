import sourceData from "@/data.json"
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import NotFound from "@/pages/NotFound.vue";
import Forum from "@/pages/Forum.vue";
import Category from "@/pages/Category.vue";
import Profile from "@/pages/Profile.vue";
import ThreadCreate from "@/pages/ThreadCreate.vue";
import ThreadEdit from "@/pages/ThreadEdit.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/thread/:id',
      name: 'Thread',
      component: ThreadShow,
      props: true,
      beforeRouteEnter(to) {
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
        if (!threadExists)
          return {
            name: 'NotFound',
            params: {
              pathMatch: to.path.substring(1).split("/")
            },
            query: to.query,
            hash: to.hash
          }
      },
    },
    {
      path: '/forum/:forumId/thread/new-thread',
      name: 'NewThread',
      component: ThreadCreate,
      props:true
    },
    {
      path: '/thread/:threadId/edit',
      name: 'EditThread',
      component: ThreadEdit,
      props:true
    },
    {
      path:'/me',
      name:'User',
      component: Profile,
      props:true,
      meta:{toTop:true,smoothScroll:true}
    },
    {
      path:'/me/edit',
      name:'UserEdit',
      component: Profile,
      props: {editMode:true}
    },
    {
      path:'/forum/:id',
      name:'Forum',
      component: Forum,
      props:true
    },
    {
      path:'/category/:id',
      name:'Category',
      component: Category,
      props:true
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*', name:'NotFound', component: NotFound
    },

  ],
  scrollBehavior(to){
    const scroll = {}
    if(to.meta.toTop) scroll.top = 0
    if(to.meta.smoothScroll) scroll.behavior='smooth'
    return scroll
  }
})

export default router
