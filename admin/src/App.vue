<template>
  <div class="app">
    <SideBar/>
    <router-view />
  </div>
</template>

<script>

import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar ,
  }
}
</script>



<style>
.app {
  display: flex;
  flex-direction: row;
  gap: 50px;
}
</style>