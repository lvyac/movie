import axios from '../utils/axios';

class MovieModel {
    constructor() {

    }
    //详情页
    movieDetail(data, callback) {
        let url = "/api/adminapi/api/movieDetail.json";
        axios.get(url, {
            params: {
                categoryId: data.cid,
                movieDetailId: data.id
            }
        }).then(res => {
            callback && callback(res.data)
            console.log(res.data)
        })
    }


    /**
     * 列表页 + 搜索
     * http://m.dydytt.net:8080/adminapi/api/movieList.json?categoryId=1&page=1&searchContent=
     * @param {cid:"分类id",page:"页码",search:"搜索关键字"} data 
     * @param {*} callback 
     */
    movieList(data, callback) {
        let url = "/api/adminapi/api/movieList.json";
        axios.get(url, {
            params: {
                categoryId: data.cid,
                page: data.page || 1,
                searchContent: data.search
            }
        }).then((res) => {
            callback && callback(res.data)
        })
    }

    /**
     * 最新电影
     * @param int page 
     * @param {*} callback 
     */
    newMovie(page = 1, callback) {
        let param = {
            page:parseInt(page) || 1,
            categoryId:9
        }
        this.movieList(param, callback)
    }

    //分类
    movieCategory(callback){
        let url="/api/adminapi/api/movieCategory.json"
        axios.get(url).then((res)=>{
            console.log(res)
            callback && callback(res.data)
        })
    }

}

export default MovieModel