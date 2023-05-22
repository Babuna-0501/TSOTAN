<template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, label: 'Home', url: '/' },
          { id: 2, label: 'Add', url: '/add' },
          { id: 3, label: 'List', url: '/list' }
          // Add more menu items as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    height: 100vh;
    /* Add more styles as needed */
  }
  </style>
  