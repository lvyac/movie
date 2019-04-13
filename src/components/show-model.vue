<template>
  <div class="model-fix" v-show="showModel">
    <tip :content="tipContent" :show="showTip" @hiddenTip="showTip = false"></tip>
    <div class="model-box">
      <span class="iconfont icon-dashujukeshihuaico- btn-close" @click="show"></span>
      <div class="down-list">
        <div v-for="(address,id) in downList" class="down-item" v-if="address">
          <div class="item-address">{{address}}</div>
          <div class="item-foo">
            <div class="item-btn btn-default" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</div>
            <div class="item-btn btn-primary">
              <span class="iconfont icon-xunlei"></span>下载
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tip from './tip.vue';

export default {
  props: ["showModel","downList"],
  components:{tip},
  data() {
    return {
      showTip:false,
      tipContent:""
    };
  },
  methods: {
    show() {
      this.$emit("hiddenModel", false);
    },
    onCopy(){
      this.showTip = true
      this.tipContent = "复制成功"
      console.log('复制成功')
    },
    onError(){
      console.log('复制失败')
    }
    
  }
};
</script>
<style lang="scss" scoped>
.model-fix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 900;
  display: flex;
  flex-direction: column;
}
.model-box {
  margin: auto;
  width: 90%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
}
$close-height: 20px;
.btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  width: 20px;
  height: $close-height;
  text-align: center;
  font-size: 24px;
  line-height: $close-height;
  z-index: 100;
  background-color: #fff;
}
.down-list {
  display: flex;
  flex-direction: column;
  .down-item {
    margin-top: 10px;
    .item-address {
      word-wrap: break-word;
      background-color: #f2f2f2;
      width: 100%;
      overflow: hidden;
      padding: 5px;
    }
    .item-foo {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 10px;
      .item-btn {
        padding: 5px 20px;
        border: 1px solid #ededed;
        border-radius: 4px;
      }
    }
  }
}
.btn-default {
  color: #212121;
  border: 1px solid #212121;
}
.btn-primary {
  background-color: #00bcd4;
  color: #fff;
}
</style>


