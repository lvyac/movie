<template>
    <div class="model-fix" v-show="showModel">
        <div class="model-box">
            <span class="iconfont icon-dashujukeshihuaico- btn-close"  @click="show"></span>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['showModel'],
    date(){
        return{

        }
    },
    methods:{
        show(){
            this.$emit("hiddenModel",false)
        }
    }
}
</script>
<style lang="scss" scoped>
    .model-fix{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 900;
        display: flex;
        flex-direction: column;
    }
    .model-box{
        margin:auto;
        width:90%;
        padding:15px;
        box-sizing: border-box;
        background-color:#fff;
        border-radius: 4px;
        position: relative;
    }
    $close-height:20px;
    .btn-close{
        position: absolute;
        top:5px;
        right:5px;
        display: block;
        width:20px;
        height: $close-height;
        text-align: center;
        font-size:24px;
        line-height: $close-height;
        z-index: 100;
        background-color: #fff;
    }
    .down-list{
    display: flex;
    flex-direction: column;
    .down-item{
      margin-top:10px;
      .item-address{
        word-wrap:break-word;
        background-color: #f2f2f2;
        width: 100%;
        overflow: hidden;
        padding:5px;
      }
      .item-foo{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top:10px;
        .item-btn{
            padding:5px 20px;
            border:1px solid #ededed;
            border-radius: 4px;
        }
      }
    }
  }
</style>


