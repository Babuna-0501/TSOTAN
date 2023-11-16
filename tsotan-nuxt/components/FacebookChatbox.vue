<!-- components/FacebookChatbox.vue -->

<template>
  <div id="fb-customer-chat"></div>
</template>

<script>
export default {
  mounted() {
    // Add your script logic here
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute('page_id', '1492669904285331');
    chatbox.setAttribute('attribution', 'biz_inbox');
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
