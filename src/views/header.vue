<template>
  <div class="header">
    <div class="nav clearFix">
      <router-link to="/" tag="div" class="pull-left" v-show="$route.params.cid">
        <span class="iconfont icon-fanhui1 nav-icon"></span>
      </router-link>
      <span class="nav-title">电影天堂</span>
      <div class="pull-right" @click="showCategory = !showCategory">
        <span class="iconfont icon-fenlei nav-icon"></span>
      </div>
    </div>
    <transition>
    <div class="header-category" v-show="showCategory">
        <router-link v-for="category in categorys" :to="'/list/'+category.id">{{category.name}}</router-link>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
    name:"category",
    data(){
        return {
            categorys:{},
            showCategory:false
        }
    },
    methods:{
        getCategory() {
            this.$api.movieCategory((res)=>{
                if(res.categoryDtoList){
                    this.categorys = res.categoryDtoList
                    console.log(res.categoryDtoList)
                }
            })
        },


    },
    watch:{
      '$route'(to,from){
        this.showCategory=false
        console.log(to)
      }
    },
    created(){
        this.getCategory()
    }

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;  
  background-color: #32c27b;
  color: #fff;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 18px;
    height: 48px;
    .nav-title{
      font-size: 20px;
      font-weight: 500;
      margin:auto;
      text-align: center;
    }
 
    .nav-icon {
      font-size: 18px;
      font-weight: 800;
    }
    .icon-fenlei{
        text-align: right;
    }
  }
}
.pull-let{
    float: left;
    z-index:100;
}
.pull-right{
    float:right;
    z-index:100;
}
.header-category{
    background-color: rgba(5, 78, 21, 0.8);
    width:100%;
    z-index: 100;
    position:absolute;
    color:#fff;
    display: flex;
    flex-wrap: wrap;
    padding:15px 0;
    a{
        padding:5px 15px;
        min-width: 25%;
        color:#fff;
        text-align: center;
    }

}

</style>

