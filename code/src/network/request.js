import axios from 'axios';
export function request(config){  
    const instance = axios.create({
        baseURL:'https://www.fengcaimi.cn/api',
        timeout:5000
    })
    //拦截器
    instance.interceptors.request.use(config => {
        // console.log(config)
        return config;
    },err=>{
        console.log(err);
    })
    // instance.interceptors.response.use()
    return instance(config)
}