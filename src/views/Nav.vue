<template>
	<div>
	<div class="zh-nav zh-nav-bar zh-fx-between">
		<li class="nav-item"><router-link to="/home">首页</router-link></li>
		<li class="nav-item"><router-link to="/explore">发现</router-link></li>
		<li class="nav-item"><router-link to="/question/waiting">等你来答</router-link></li>
		<li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li>
	</div>
	<!-- 二级路由 -->
	<router-view />
	</div>
</template>

<script></script>

<style lang="scss" scoped></style>
