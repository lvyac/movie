<template>
  <div class="tip" v-show="show">
    <div class="tip-content">{{content}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { setTimeout } from "timers";
export default {
  name: "tip",
  props: ["content", "timeout", "show"],
  data() {
    return {
      showTip: true
    };
  },
  methods: {
    hiddenModel() {
      let timeout = parseInt(this.timeout) || 2;
      timeout = timeout * 1000;
      setTimeout(() => {
        this.$emit("hiddenTip",false);
      }, timeout);
    }
  },
  watch: {
    show: function() {
      this.hiddenModel();
    }
  }
};
</script>

<style scoped lang="scss">
.tip {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}
.tip-content {
  padding: 15px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  margin: auto;
}
</style>
