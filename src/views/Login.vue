<template>
	<div class="login-bar tx-center">
		<router-link to="/">
			<img src="../assets/image/2.png" class="logo" />
		</router-link>
	</div>
</template>

<script>
export default{
		name:'login',
		data(){
			return {};
		},
		created() {}
};	
</script>

<style lang="scss" scoped>
.login-bar{
	background-image: url(../assets/image/1.png);
	background-repeat: no-repeat;
	background-color: #b8e5f8;
	background-size: cover;
	width: 100%;
	height: 100vh;
	overflow: auto;
	.logo{
		width: 128px;
		height: 81px;
		margin-bottom: 24px;
		margin-top: 40px;
	}
}
</style>
