<template>
    <div class="sidebar">
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <button>Гарах</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, label: 'Бараа нэмэх', url: '/' },
          // { id: 2, label: 'Add', url: '/add' },
          { id: 3, label: 'Жагсаалт', url: '/list' },
          { id: 3, label: 'Бараа засах', url: '/edit/:id' }
          // Add more menu items as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  .sidebar {
    width: 200px;
    background-color: #5968b3;
    height: 100vh;
    color: #fff;
    /* Add more styles as needed */
    list-style-type: none;
  }
   a {
    list-style-type: none;
    text-decoration: none;
    color: #fff;
   }
   .sidebar ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
   }
   .sidebar ul li {
    justify-content: center;
    align-items: center;
   }
   .sidebar button {
    position: fixed;
    bottom: 2%;
    left: 2%;
    margin-left: 0;
    border: none;
   }
   @media (min-width: 768px) {
    .sidebar ul {
      width: 200px;
    }
   }
  </style>
  