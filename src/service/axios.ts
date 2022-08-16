import axios from 'axios'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
})
//请求拦截
request.interceptors.request.use((config)=>{
  NProgress.start()  //进度条开始
  return config;
})
//响应拦截
request.interceptors.response.use(response => {
  NProgress.done() //进度条结束
  if (response && response.status === 200 && response.data.code !== 200) {
    ElMessage.error(response.data.message)
    return null
  } else {
    return response.data
  }
  
}, error => {
  /** *** 接收到异常响应的处理开始 *****/
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 403:
        error.message = '权限不足，拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      ElMessage.error('服务器响应超时，请刷新当前页')
    }
    error.message = '连接服务器失败'
  }
  ElMessage.error(error.message)
})

export default request
