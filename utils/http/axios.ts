import { message } from 'antd';
import axios from 'axios';
import { history } from 'Utils/route'

const http = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})



// 添加请求拦截器
http.interceptors.request.use(function (config) {
    const authority = localStorage.getItem("token")
    
    if (authority) {
        config.headers = {
            ...config.headers,
            "authority": localStorage.getItem("token")
        }
    }

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response: any) {
    const data = response.data;
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (data.code % 1000 === 0) {
        return data.data;
    } else if (data.code === 13011 || data.code === 13012) {
        message.error(data.message)
        localStorage.clear()
        history.push("/")
    } else {
        message.error(data.message)
        return Promise.reject()
    }

}, function (error) {
    console.log(123123);

    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http;