<template>
	<div class="all">
		<div class="topic-head">
			<svg class="Zi" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
				<path
					d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">全部专题</h2>
			<h4 class="hh">共有489个专题</h4>
		</div>
		<div class="container">
			<div class="row zh-shadow" v-for="(item, index) in specials" :key="index">
				<div class="left"><img :src="item.banner" alt="" /></div>
				<div class="right">
					<div class="w-row">
						<h3 style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ item.title }}</h3>
						<button class="button"><h4>关注专题</h4></button>
					</div>

					<p class="meta">{{ item.updated }}更新·{{ item.viewCount }}次浏览</p>
					<p class="introduction">{{ item.introduction }}</p>
					<span v-for="(section, index) in item.sections" :key="index" class="section">{{ section.sectionTitle }}</span>
				</div>
			</div>
		</div>

		<div class="sss">
			<div>
				<a href="#top"><i class="iconfont shadow" style="font-size: 60px; color: red;">&#xe6ab;</i></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'special',
	data() {
		return {
			specials: []
		};
	},
	created() {
		this.axios.get(this.$store.state.baseUrl + '/special/all').then(res => {
			console.log(res);
			this.specials = res.data.data;
		});
	}
};
</script>

<style lang="scss" scoped>
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
	background-color: rgb(246, 246, 246);
}
.sss {
	width: 50px;
	height: 50px;
	position: fixed;
	right: 70px;
	bottom: 40px;
}
.topic-head {
	position: relative;
	display: flex;
	background-color: rgb(246, 246, 246);
	margin-top: -10px;
	height: 80px;
	padding-left: 20px;
	padding-top: 28px;
	.Zi {
		position: absolute;
		color: #0084ff;
		left: 20px;
	}
	.zui{
		position: absolute;
		left: 60px;
	}
	.hh{
		position: absolute;
		left: 160px;
	}
}
.p {
	width: 60px;
}
.topic-head h4 {
	padding-top: 8px;
	margin-left: 20px;
	color: darkgray;
}
.container {
	display: block;
	margin: auto;
	width: 90%;
	margin-left: 10px;
	// margin-top: 5px;
}
.row {
	background-color: rgb(255, 255, 255);
	display: flex;
	height: 250px;
	width: 1000px;
	margin: 15px;
	border-radius: 10px;
	/* margin-top: -50px; */
}
.left {
	width: 30%;

	text-align: center;
}
.left img {
	width: 90%;
	margin-top: 25px;
	height: 150px;
	border-radius: 10px;
}
.right {
	margin-top: 20px;
	width: 60%;
	margin-right: 20px;
}
.w-row h3 {
	width: 80%;
}
.button {
	width: 100px;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
	position: absolute;
	left: 1010px;
	margin-top: -30px;
	margin-left: 40px;
}
.meta {
	color: darkgray;
	font-size: 13px;
}
.introduction {
	margin-top: 10px;
	margin-bottom: 10px;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box; /*重点，不能用block等其他*/
	-webkit-line-clamp: 2; /*重点IE和火狐不支持*/
	-webkit-box-orient: vertical; /*重点*/
}
.section {
	background-color: rgb(246, 246, 246);
	width: auto;
	margin-right: 10px;
	padding: 2px;
	font-size: 13px;
	border-radius: 5px;
}
</style>
