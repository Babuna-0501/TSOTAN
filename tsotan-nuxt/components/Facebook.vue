<!-- components/FacebookChat.vue -->
<template>
    <div>
      <div id="fb-root"></div>
      <div class="fb-customerchat" :page_id="yourFacebookPageId"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        yourFacebookPageId: '1492669904285331',
      };
    },
    mounted() {
      this.initializeFacebookChat();
    },
    methods: {
      initializeFacebookChat() {
        window.fbAsyncInit = function() {
          FB.init({
            xfbml: true,
            version: 'v13.0'
          });
        };
  
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
      },
    },
  };
  </script>
  