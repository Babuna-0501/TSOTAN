<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-4">
        <List/>
      </div>
    </div>
  </div>
</template>

<script>
// import AuthorsTable from "./components/AuthorsTable.vue";
import List from "./components/List.vue";

export default {
  components: {
    List,
  },
};
</script>
