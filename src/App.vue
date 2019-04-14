<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>
<script>
import header from "./views/header";
import scroll from './components/scroll';
export default {
  components: {
    "v-header": header,
    scroll,
  }
};
</script>

<style lang="scss">
</style>