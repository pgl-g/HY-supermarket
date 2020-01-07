
// 包装home组件的一些数据，模块化
import {request} from '../network/request'


// 头部的数据请求
export function gethomeDate(){
    return request({
        url:'/home/multidata'
    })
}

// 懒加载的数据请求

export function getGoodsdata(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}