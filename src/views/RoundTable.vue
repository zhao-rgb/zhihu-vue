<template>
	<div class="all">
		<div class="topp">
			<span class="yuan">圆桌</span>
			<span class="ban">举办圆桌</span>
		</div>

		<div class="row">
			<div class="explore zh-shadow " v-for="(item, index) in roundTables" :key="index">
				<div class="top ">
					<div class="sh"></div>
					<img :src="item.banner" alt="" />
					<p class="name">{{ item.name }}</p>
				</div>
				<div class="bo">
					<h5 style="color: #778087;">该圆桌被浏览{{ item.visitsCount }}次</h5>
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
	name: 'roundTable',
	data() {
		return {
			roundTables: [],
			currentPage: 1,
			count: 36,
			scroll: ''
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/roundTable/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.roundTables = res.data.data;
			console.log(this.roundTables.length);
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/roundTable/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.roundTables.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.roundTables.length);
			});
		},
		scrollDs() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			if (scrollTop + windowHeight > scrollHeight - 100) {
				console.log('到了底部');
				this.loadMore();
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollDs);
	}
};
</script>

<style lang="scss" scoped>
.sh {
	position: absolute;
	z-index: 1;
	border-radius: 10px;
	height: 100%;
	width: 100%;
	// 渐变
	background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(66, 66, 66));
}
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

.topp {
	position: relative;
	left: 25px;
	height: 60px;
	background-color: rgb(255,255,255);
	width: 82%;
	border-bottom: 1px solid #ebebeb;
	.yuan {
		position: absolute;
		top: 20px;
		left: 20px;
		margin: 0;
		min-width: 0;
		font-weight: 600;
		color: #1a1a1a;
		font-size: 15px;
		line-height: 20px;
	}
	.ban {
		position: absolute;
		top: 20px;
		right: 20px;
		color: #0084ff;
		font-weight: 600;
		font-size: 14px;
		line-height: 20px;
	}
}
.row {
	position: relative;
	left: 25px;
	display: flex;
	flex-wrap: wrap;
	width: 82%;
	background-color: rgb(255,255,255);
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	margin: 21px;
	height: 200px;
	width: 200px;
	background-color: rgb(255, 255, 255);
}
.top {
	height: 80%;
	position: relative;
	img {
		width: 100%;
		height: 100%;
		z-index: -1;
	}
}
.name {
	position: absolute;
	bottom: 5%;
	left: 5%;
	color: white;
	z-index: 2;
}
</style>
