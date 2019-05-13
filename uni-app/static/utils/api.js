var Fly = require("flyio/dist/npm/wx")
var fly = new Fly();
fly.config.baseURL="https://www.thinkmoon.cn/TmWeBlog/api/"

fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data.data
    },
    (err) => {
        //发生网络错误后会走到这里
        return Promise.resolve("ERROR")
    }
)

// 获取最近文章
export const getRecentPost = (params) => {
	return fly.get('getRecentPost', params)
}
// 获取作者信息
export const getAuthorInfo = (params) => {
	return fly.get('getAuthorInfo', params)
}
// 通过cid获取文章
export const getPostBycid = (params) => {
	return fly.get('getPostBycid', params)
}
// 获取总页数
export const getPageNum = (params) => {
	return fly.get('getPageNum', params)
}

// 获取总览
export const getOverview = (params) => {
	return fly.get('getOverview', params)
}