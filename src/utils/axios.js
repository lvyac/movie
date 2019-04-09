import axios from 'axios';
import Router from '../router';
import md5 from 'js-md5';

axios.interceptors.request.use(
    config => {
        let timestamp = new Date().getTime();
        let entryptkey = md5("wq0LQbLUTH66x-header-request-timestamp=" + timestamp + "x-header-request-imei=");
        config.headers = {
            "x-header-request-timestamp": timestamp,
            "x-header-request-key": entryptkey, // 加密文式 md5(wq0LQbLUTH66x-header-request-timestamp=1553844987x-header-request-imei=)
            "x-header-request-imei": ""  //空
        }
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

axios.defaults.timeout = 36000000 //设置超时时间

axios.interceptors.response.use(
    response => {
        // 检测某种状态进行重定向
        if (response.data.code === 403) {
            Router.push({
                name: 'login'
            })
        }
        return response
    },
    error => {
        return Promise.resolve(error.response);
    }
)

export default axios
