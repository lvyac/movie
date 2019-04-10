<template>
  <div>
    <div class="header">
      <img :src="data.homePicUrl" class="logo">
      <div class="movie-info">
        <div class>{{data.name}}</div>
        <div class>{{data.publishTime}}</div>
      </div>
    </div>
    <div class="content">{{content}}</div>
    <div class="address"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    gitDetail() {
      let param = {
        cid: this.$route.params.cid,
        id: this.$route.params.id
      };
      this.$api.movieDetail(param, res => {
        console.log(res);
        this.data = res;
      });
    }
  },
  computed: {
    content: function() {
      let str = this.data.content;
      if(str){
          str = str.replace(/\r\n/g,"<br>");
      }
      
      return str
    }
  },
  created() {
    this.gitDetail();
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
}
.logo {
  width: 120px;
  height: 170px;
}
</style>



