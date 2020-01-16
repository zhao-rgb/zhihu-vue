<template>
	<div>
			<div class="banner">
				<img src="" alt="">
				<h3>全部专题</h3>
			</div>
			<div class="zh-container">
				<div class="zh-row" v-for="(item,index) in specials" :key="index">
					<div class="zh-col-4"><img :src="item.banner" alt=""></div>
					<div class="zh-col-8">
						<h3>{{item.title}}</h3>
						<p class="meta">{{item.updated}}更新,{{item.viewCount}}次浏览</p>
						<p class="introduction">{{item.introduction}}</p>
						<span v-for="(section,index) in item.sections" :key="index" class="section">
							{{section.sectionTitle}}
						</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name:'special',
		data(){
			return{
				specials:[]
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res =>{
				console.log(res);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style>
</style>
