<template>
	<div>
		<div class="zh-nav">
			<div class="zh-nav-bar">
				<ul class="zh-fx-left gutter">
					<img src="../assets/image/3.png" class="img" />
					<li class="nav-item"><router-link to="/home">首页</router-link></li>
					<li class="nav-item"><router-link to="/explore">发现</router-link></li>
					<li class="nav-item"><router-link to="/question/waiting">等你来答</router-link></li>
					<li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li>
				</ul>
			</div>
		</div>
	
	<!-- 二级路由 -->
	<router-view class="zh-container"/>
	</div>
</template>

<script>
export default{
	name:'nav',
	data(){
		return{};
	},
	created() {
	}
};
	
</script>

<style lang="scss" scoped>

.gutter{
	position: relative;
	margin-right: 30px;
}
.img{
	margin-right: 20px;
	margin-top: 3px;
}
.nav-item{
	margin-right: 80px;
}
</style>
