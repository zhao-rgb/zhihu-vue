<template>
	<div>
			<div class="head">
				<img src="" alt="" />
				<i class="iconfont">&#xe65d;</i>
				<h2>最新专题</h2>
			</div>
			<div class="row">
				<div class="explore" v-for="(item, index) in specials" :key="index">
					<img :src="item.banner" alt="" />
					<div class="row">
						<div class="left">
							<h3>{{ item.title }}</h3>
							<h5 class="meta">{{ item.updated }}更新,{{ item.viewCount }}次浏览</h5>
						</div>
						<div class="right">
							<button class="button"><h4>关注专题</h4></button>
						</div>
					</div>

					<p class="introduction">{{ item.introduction }}</p>

					<span v-for="(section, index) in item.sections" :key="index" class="section">{{ section.sectionTitle }}</span>
				</div>
			</div>
			<div class="k">
				<router-link to="/special/all"><button class="btn-circle">查看所有</button></router-link>
			</div>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			specials: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res => {
			console.log(res);
			this.specials = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1616266 */
	src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot');
	src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff') format('woff'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1616266_b8gknsgz736.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 30px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	color: blue;
	margin: 10px;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
.container {
	display: block;
	margin: auto;
	width: 80%;
	margin-top: 15px;
	background-color: #f6f6f6;
}
.head {
	display: flex;
	align-items: center;
	
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	width: 46%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
}
.explore img {
	border-radius: 5px;
	width: 100%;
}
.left {
	height: 100px;
	width: 80%;
	padding: 25px;
}
.left h5 {
	color: darkgray;
}
.right {
	height: 100px;
	width: 20%;
	padding-top: 20px;
	
}
.button {
	width: 90%;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.k{
	display: flex;
	align-items: center;
	margin-left: 460px;
}
</style>
