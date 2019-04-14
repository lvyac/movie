<template>
  <div>
    <tip :content="tipContent" :show="showTip" @hiddenTip="showTip = false"></tip>
    <div class="header">
      <img :src="data.homePicUrl" class="logo">
      <div class="movie-info" v-if="contents">
        <div class="movie-info-item">{{contents[0]}}</div>
        <div class="movie-info-item">{{contents[2]}}</div>
        <div class="movie-info-item">{{contents[3]}}</div>
        <div class="movie-info-item">{{contents[4]}}</div>
        <div class="movie-info-item">{{contents[9]}}</div>
      </div>
    </div>
    <div class="label">内容简介</div>
    <div class="content">
      <div v-for="content of contents">{{content}}</div>
      <img v-if="data.homePicUrl" :src="data.homePicUrl" class="content-img">
    </div>
    <div class="label">下载链接</div>
    <div class="address">
      <div class="address-item" v-for="url in urls" v-if="url">
        <div class="url">{{url}}</div>
        <div class="btn-area">
          <div class="btn btn-default" v-clipboard:copy="url" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</div>
          <div class="btn btn-primary"><span class="iconfont icon-xunlei"></span>下载</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tip from '../components/tip.vue';
export default {
  data() {
    return {
      data: {},
      urls: [],
      showTip:false,
      tipContent:"复制成功"
    };
  },
  components:{tip},
  methods: {
    gitDetail() {
      let param = {
        cid: this.$route.params.cid,
        id: this.$route.params.id
      };
      this.$api.movieDetail(param, res => {
        console.log(res);
        this.data = res;
        this.urls = res.downloadUrl.split(";");
      });
    },
    onCopy(){
      this.showTip = true
      this.tipContent = "复制成功"
      console.log('复制成功')
    },
    onError(){
      console.log('复制失败')
    },
  },
  computed: {
    contents: function() {
      let str = this.data.content;
      let arr = [];
      if (str) {
        //str = str.replace(/\r\n/g,"<br>");
        arr = str.split("\r\n");
        console.log(arr);
      }
      return arr;
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
  padding: 15px;
  box-sizing: border-box;
}
.logo {
  width: 120px;
  height: 170px;
  flex: none;
  margin-right: 10px;
}
.movie-info {
  flex: auto;
  overflow: hidden;
  .movie-info-item {
    border-bottom: 1px dashed #e5e5e5;
    line-height: 33px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
}
.content {
  padding: 15px;
  box-sizing: border-box;
  line-height: 1.75em;
  .content-img {
    width: 100%;
    margin: 15px auto;
  }
}
.label {
  margin-left: 15px;
  border-left: 5px solid #32c27b;
  padding-left: 5px;
  font-size: 18px;
  font-weight: 500;
}
.address{
  padding:15px;
  box-sizing: border-box;
  .url{
    padding:15px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    word-wrap: break-word;
    width: 100%;
    overflow: hidden;
  }
  .btn-area{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin:20px auto;
    .btn{
      padding: 5px 20px;
      border-radius: 4px;
      width:40%;
      text-align: center;
    }
    .btn-default {
      color: #212121;
      border: 1px solid #212121;
    }
    .btn-primary {
      background-color: #00bcd4;
      color: #fff;
    }
  }
}
</style>
