<script setup>
import {useUsersStore} from "@/store/UsersStore";

const userStore = useUsersStore()
const authUser = userStore.getAuthUser
</script>

<template>
  <header class="header" id="header">

    <router-link :to="{name:'Home'}" class="logo">
      <img src="../assets/logo.svg" >
    </router-link>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>

        <li class="navbar-user">
          <router-link :to="{name:'User'}">
            <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile picture`">
            <span>
                        {{ authUser.name }}
                        <img class="icon-profile" src="../assets/svg/arrow-profile.svg" alt="">
                    </span>
          </router-link>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>

<!--      <ul>-->
<!--        <li class="navbar-item">-->
<!--          <a href="index.html">Home</a>-->
<!--        </li>-->
<!--        <li class="navbar-item">-->
<!--          <a href="category.html">Category</a>-->
<!--        </li>-->
<!--        <li class="navbar-item">-->
<!--          <a href="forum.html">Forum</a>-->
<!--        </li>-->
<!--        <li class="navbar-item">-->
<!--          <a href="thread.html">Thread</a>-->
<!--        </li>-->
<!--        &lt;!&ndash; Show these option only on mobile&ndash;&gt;-->
<!--        <li class="navbar-item mobile-only">-->
<!--          <a href="profile.html">My Profile</a>-->
<!--        </li>-->
<!--        <li class="navbar-item mobile-only">-->
<!--          <a href="#">Logout</a>-->
<!--        </li>-->
<!--      </ul>-->
    </nav>
  </header>

<!--  <div class="container">-->
<!--    <div class="col-full">-->
<!--      <div class="forum-list">-->

<!--        <h2 class="list-title">-->
<!--          <a href="category.html">Feedback & Information</a>-->
<!--        </h2>-->

<!--        <div class="forum-listing">-->
<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Announcements</a>-->
<!--            <p>Important announcements about the forum.</p>-->
<!--          </div>-->

<!--          <div class="threads-count">-->
<!--            <p><span class="count">1</span> thread</p>-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://pbs.twimg.com/profile_images/719242842598699008/Nu43rQz1_400x400.jpg" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">Post Reactions</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="forum-listing">-->
<!--          <div class="forum-details">-->
<!--            <a href="forum.html" class="text-xlarge">Questions & Feedback</a>-->
<!--            <p>Ask your questions and drop your feedback here</p>-->
<!--          </div>-->

<!--          <div class="threads-count">-->
<!--            <p class="count">73</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://i.imgur.com/OqlZN48.jpg" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">Where is the sign in button?</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Joseph Kerr</a>, three hours ago</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

<!--      <div class="forum-list">-->

<!--        <h2 class="list-title">-->
<!--          <a href="category.html">Discussions</a>-->
<!--        </h2>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Pets</a>-->

<!--            <p>All things pet related</p>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">1337</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://i.imgur.com/WPSrfGm.jpg" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">What is the best animal joke y...</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Blossom</a>, 16 hours ago</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Vehicles</a>-->

<!--            <p>Petrol head? This is your section</p>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">463</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">Do you know what FIAT stands f...</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Ray-Nathan James</a>, three weeks ago</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Fishing</a>-->

<!--            <ul class="subforums">-->
<!--              <li><a href="#">Freshwater</a></li>-->
<!--              <li><a href="#">Saltwater</a></li>-->
<!--              <li><a href="#">Underwater</a></li>-->
<!--              <li><a href="#">Phising</a></li>-->
<!--            </ul>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">49</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Fraynathan?alt=media&token=bd9a0f0e-60f2-4e60-b092-77d1ded50a7e" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">What is the most exciting fish...</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Ray-Nathan James</a>, 3 hours ago</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Cooking</a>-->

<!--            <ul class="subforums">-->
<!--              <li><a href="#">Recipes</a></li>-->
<!--            </ul>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">16</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">How can I chop onions without...</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Bruce Wayne</a>, last week</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->


<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a href="forum.html" class="text-xlarge">Miscellaneous</a>-->
<!--            <p>The forum for anything</p>-->
<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">0</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            No threads here-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->

<!--      <div class="forum-list">-->

<!--        <h2 class="list-title">-->
<!--          <a href="category.html">Comedy</a>-->
<!--        </h2>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Jokes</a>-->

<!--            <p>Jokes & punchlines</p>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">3</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="https://i.imgur.com/aaw5m0T.jpg" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">Knock knock, who's there?</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Princess Dee Dee</a>, 23 hours ago</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--        <div class="forum-listing">-->

<!--          <div class="forum-details">-->
<!--            <a class="text-xlarge" href="forum.html">Memes</a>-->

<!--            <p>The big ol' meme forum</p>-->

<!--          </div>-->


<!--          <div class="threads-count">-->
<!--            <p class="count">17</p> threads-->
<!--          </div>-->

<!--          <div class="last-thread">-->
<!--            <img class="avatar" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">-->
<!--            <div class="last-thread-details">-->
<!--              <a href="thread.html">What is the funniest meme you'...</a>-->
<!--              <p class="text-xsmall">By <a href="profile.html">Bruce Wayne</a>, last week</p>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->

<!--      </div>-->

<!--    </div>-->
<!--  </div>-->

<!--  <div class="forum-stats desktop-only">-->
<!--    <hr>-->
<!--    <ul>-->
<!--      <li><i class="fa fa-user-circle-o"></i>47 users online</li>-->
<!--      <li><i class="fa fa-user-o"></i>497 users registered</li>-->
<!--      <li><i class="fa fa-comments-o"></i>49 threads</li>-->
<!--      <li><i class="fa fa-comment-o"></i>763 posts</li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<style scoped>

</style>
