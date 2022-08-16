<script setup lang="ts">
import {ref,onMounted} from "vue"
import { useRouter } from 'vue-router'
import { init } from 'ityped'

const content = ref<null | Element>(null)

onMounted(() => {
	init(content.value as Element, {
		showCursor: false,
		disableBackTyping: true,
		strings: [' is not found!'],
	})
})

const router = useRouter()

const back = () => router.push('/')
</script>

<template>
		<div class="wrapper">
			<div class="code404">404</div>
			<div ref="content" class="content">The Page</div>
			<button class="btn" @click="back">
				👉 Go Home
			</button>
		</div>

		<img src="~asset/27.svg" class="cover" alt="page not found" />
</template>

<style lang="less" scoped>
.wrapper{
	width: 50%;
	margin-top:200px;
	margin-left:250px;
	.code404 {
	  font-size: 50px;
	  margin-bottom: 20px;
  }
	.content {
	  height: 40px;
		font-size: 25px;
  }
	.btn {
	  font-size: 20px;
	  margin-top: 30px;
	  padding: 12px 20px;
		border: 0;
		background-color: #fff;
		box-shadow: 6px 6px 30px#e5f2f5;
		cursor: pointer;
		transition: all 0.3s;
		border-radius: 10px;
		&:hover{
			transform: scale(1.1);
		}
  }
}



.cover {
	position: absolute;
	top:0;
	right: 0;
	height: auto;
	width: 700px;
	margin: 0 5px;
	max-width: 100%;
	max-height: 100%;
}


</style>

