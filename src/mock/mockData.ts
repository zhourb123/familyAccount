import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'
// 随机生成一个对象
var data = mock({
  'userlist|10':[
    {
      'id|+1':1,
      username:'@cname()',
      date:'@now(yyyy-MM-dd HH:mm:ss)',
      email: '@email()',
      'age|1-80':0
    }
  ]
})
export default [
  {
    url: '/login',
    method: 'get',
    response: () => {
      return {
        code:200,
        data,
        message:"success"
      }
    },
  },
] as MockMethod[]