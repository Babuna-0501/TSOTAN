<template>
    <div>
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pageTitle: 'Page Title',
        pageContent: 'Page content goes here.',
      };
    },
  };
  </script>
  