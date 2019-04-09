<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
import header from "./views/header";
export default {
  components: {
    "v-header": header
  }
};
</script>

<style lang="scss">
</style>