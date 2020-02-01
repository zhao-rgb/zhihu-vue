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

		<button class="goto-top" @click="backToTop" v-show="btnFlag">
			<svg class="grey-icon" title="回到顶部" viewBox="0 0 24 24" width="24" height="24">
				<path
					d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"
				></path>
			</svg>
		</button>
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
			scroll: '',
			btnFlag: false
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
	mounted() {
		// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
		window.addEventListener('scroll', this.scrollToTop);

		window.addEventListener('scroll', this.scrollDs);
	},
	methods: {
		backToTop() {
			//加定时器，平滑过渡回到顶部
			let timer = setInterval(() => {
				let ispeed = Math.floor(-this.scrollTop / 5);
				document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed;
				if (this.scrollTop === 0) {
					clearInterval(timer);
				}
			}, 16);
		},
		// 计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			this.scrollTop = scrollTop;
			if (this.scrollTop > 1000) {
				this.btnFlag = true;
			} else {
				this.btnFlag = false;
			}
		},

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
.goto-top {
	position: fixed;
	right: 30px;
	bottom: 30px;
	width: 40px;
	height: 40px;
	background: #fff;
	border: 1px solid #eee;
	border-radius: 3px;
	cursor: pointer;
}
.all {
	background-color: rgb(245, 245, 245);
}
.topp {
	position: relative;
	left: 25px;
	height: 60px;
	background-color: rgb(255, 255, 255);
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
	background-color: rgb(255, 255, 255);
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
