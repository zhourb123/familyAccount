// import {defineStore} from 'pinia'; 会自动导入 
export default defineStore('main',{
  state:()=>{
    return{
      count:10,
      dataList:[
        {
          name:'iphone13',
          price:5999,
          num:3
        }
      ],
      userList:[]
    }
  },
  getters:{
    sumPrice:(state)=>{
      return state.dataList.map(item=>item.price*item.num).reduce((pre,cur)=>{return pre+cur})
    },
    //这种写法不行 因为getters是幕后的computed属性 所以无法直接传递参数 但是可以返回一个函数接受的参数
    getSelectedItem(state){
      return (name:string)=>state.dataList.find(item=>item.name==name)
    }
  },
  //actions支持同步和异步 有些修改数据的方法需要多次调用 可以写在里面
  actions:{
   
  }
})