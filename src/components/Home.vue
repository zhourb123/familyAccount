<template>
  <h2>Nothing is difficult to the man who will try!</h2>
  <el-card>
      <el-button type="primary">开始</el-button>
      <el-button type="primary">
        <el-icon style="vertical-align: middle">
          <Search />
        </el-icon>
        <span style="vertical-align: middle"> Search </span>
      </el-button>
  </el-card>
  <h3>{{store.count}}</h3>
  <h3>{{number}}</h3>
</template>
<script setup lang="ts">
  import axios from "axios"
  import mainStore from '@/store/mainStore';
  let number = ref(27)
  const store = mainStore()
  axios.get('/login').then(res=>{
    console.log('res',res)
  })
</script>
<style lang="less">
 
</style>