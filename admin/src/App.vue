<template>
  <div class="app"  style="
        background-image: url('https://www.sailsrestaurants.com/_cms3/wwwroot/adminPublicFiles/design/cms3admin-background-01.jpg');
        background-position: top;">
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