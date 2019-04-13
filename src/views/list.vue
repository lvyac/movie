<template>
  <div>
    <div class="search">
      <input type="text" class="search-text" placeholder="搜索" v-model="keyword">
    </div>
    <div class="list">
      <div class="item" v-for="(item,key) in list">
        <a :href="'/detail/'+item.categoryId+'/'+item.id" class="inner">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-date">
            <span>更新日期</span>
            {{ item.publishTime }}
          </div>
        </a>
        <img src="../assets/image/down.png" class="icon" @click="down(item.categoryId,item.id)">
      </div>
    </div>
    <show-model v-bind:showModel="show" v-on:hiddenModel="show = false" v-bind:downList="downList" ></show-model>
  </div>
</template>

<script>
import showModel from "../components/show-model.vue";
export default {
  data() {
    return {
      list: [],
      page: 1,
      keyword: "",
      show: false,
      downList: []
    };
  },
  components: { showModel },
  computed: {},
  methods: {
    movieInit(search = "") {
      this.list = [];
      this.page = 1;
      this.getMovieList(1, search);
    },
    getMovieList(page = 1, search = "") {
      let cid = parseInt(this.$route.params.cid) || 9;
      if (search) {
        cid = 0;
      }
      let param = {
        cid: cid,
        page: parseInt(page) || 1,
        search: search
      };
      this.$api.movieList(param, res => {
        if (res.rows && res.rows.length > 0) {
          this.list = res.rows;
        }
      });
    },
    down(cid, id) {
      let param = {
        cid,
        id
      };
      this.$api.movieDetail(param, res => {
        if (res.downloadUrl) {
          let downList = res.downloadUrl.split(";");
          this.downList = downList;
          this.show = true;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      this.movieInit();
    },
    keyword: function() {
      this.movieInit(this.keyword);
    }
  },

  created() {
    this.movieInit();
  }
};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  .item {
    width: 100%;
    border-bottom: 1px solid #ededed;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    &:last-child {
      border: 0;
    }
    .icon {
      width: 20px;
      height: 20px;
      flex: none;
    }
    .inner {
      color: #555;
      text-decoration: none;
      display: auto;
      font-size: 15px;
      overflow: hidden;
      width: 100%;
      margin-right: 15px;
      .item-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
      .item-date {
        margin-top: 5px;
        font-size: 16px;
        color: #6e6e6e;
        span {
          color: #75bba8;
          border: 1px solid #75bba8;
          font-size: 8px;
          padding: 0 5px;
          margin-right: 10px;
          border-radius: 2px;
        }
      }
    }
  }
}
$search-height: 38px;
$search-bg-color: #f3f3f3;
.search {
  background-color: $search-bg-color;
  margin: 15px;
  height: $search-height;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  .search-text {
    width: 100%;
    height: 100%;
    background: url("../assets/image/search-bg.png") no-repeat;
    background-position: calc(100% - 15px) center;
    background-color: $search-bg-color;
    background-size: 20px 20px;
    font-size: 16px;
    padding: 0 40px 0 15px;
    box-sizing: border-box;
  }
  .down-list {
    display: flex;
    flex-direction: column;
    .down-item {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid red;
      &:last-child {
        border: 0;
      }
      .item-address {
        flex: auto;
        background-color: #f2f2f2;
        word-wrap: break-word;
      }
      .item-btn {
        flex: none;
      }
    }
  }
}
</style>
