import Vue from "vue";
import Router from "vue-router";
import list from "./views/list";
import detail from './views/detail';
import search from './views/search'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      name: "home",
      component: list
    },
    {
      path: "/list/:cid",
      name: "list",
      component: list
    },
    {
      path: "/search/:keyword",
      name: "search",
      component: search
    },
    {
      path: "/detail/:cid/:id",
      name: "detail",
      component: detail
    }
  ]
});
