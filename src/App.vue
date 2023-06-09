<template>
  <div id="app">
    <Nav/>
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default{
  components: {
    Nav
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 1.5rem;
  height: 7vh;
}

nav a {
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #c9e2f1ea;
}

.router-anim-enter-active{
 animation: coming .3s;
 animation-delay: .1s;
 opacity:0;
}
.router-anim-leave-active{
 animation: going .3s;
}
@keyframes going{
 0%{
 transform: translateX(0)
 }
 100%{
 transform: translateX(-50px);
 opacity:0;
 }
}
@keyframes coming{
 from{
 transform: translateX(-50px);
 opacity:0;
 }
 to{
 transform: translateX(0px);
 opacity:1;
 }
}
</style>
