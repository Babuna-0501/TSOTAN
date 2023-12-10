<template>
  <div>
    <div id="fb-root"></div>
    <!-- Your Chat plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadFacebookSDK().then(() => {
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      const chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute('page_id', '1492669904285331');
      chatbox.setAttribute('attribution', 'biz_inbox');
    });
  },
  methods: {
    loadFacebookSDK() {
      return new Promise((resolve, reject) => {
        if (document.getElementById('facebook-jssdk')) {
          resolve();
        } else {
          const js = document.createElement('script');
          js.id = 'facebook-jssdk';
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          js.onload = resolve;
          js.onerror = reject;
          document.head.appendChild(js);
        }
      });
    }
  }
};
</script>
