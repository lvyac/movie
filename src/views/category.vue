<template>
  <div class="nav-bar">
      <router-link v-for="category in categorys" :to="'/'">{{category.id}}{{category.name}}</router-link>
  </div>
</template>
<script>

export default {
    name:"category",
    data(){
        return {
            categorys:{}
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
        }
    },
    created(){
        this.getCategory()
    }

}
</script>