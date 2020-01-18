<template>
	<div class="all">
		<div class="left">
			<div class="row">
				<div class="explore zh-shadow " v-for="(item, index) in roundTables" :key="index">
					<div class="top">
						<img :src="item.banner" alt="" />
						<p class="name">{{ item.name }}</p>
					</div>
					<div class="bo">
						<h5 style="color: #778087;">该圆桌被浏览{{ item.visitsCount }}次</h5>
					</div>
				</div>
			</div>
		</div>
		<div class="right"><h3>hhh</h3></div>
		<div class="sss">
			<div>
				<a href="#top"><i class="iconfont shadow" style="font-size: 60px; color: red;">&#xe6ab;</i></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'roundTable',
	data() {
		return {
			roundTables: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/roundTable/all').then(res => {
			console.log(res);
			this.roundTables = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
.sss {
	width: 50px;
	height: 50px;
	position: fixed;
	right: 70px;
	bottom: 40px;
}
@font-face {
	font-family: 'iconfont'; /* project id 1434161 */
	src: url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.eot');
	src: url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.woff') format('woff'), url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1434161_m8mre9tvvce.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
.all {
	background-color: rgb(245, 245, 245);
}
.left {
	float: left;
	width: 800px;
}
.right {
	background-color: blue;
	margin-left: 850px;
	width: 20%;
	height: 5000px;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	width: 30%;
	margin: 1%;
	height: 200px;
	background-color: rgb(255, 255, 255);
}
.top {
	height: 80%;
	position: relative;
	img {
		width: 100%;
		height: 100%;
	}
}
.name {
	position: absolute;
	bottom: 5%;
	left: 5%;
	color: white;
}
</style>
