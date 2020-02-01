<template>
	<div class="all">
		<div class="topic-head">
			<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
				<path
					d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">热门收藏夹</h2>
		</div>
		<div class="row">
			<div class="explore" v-for="(item, index) in favorites" :key="index">
				<div class="left">
					<p class="shou">{{ item.title }}</p>
					<img :src="item.creatorAvatar" />
					<div class="ming">
						<p class="mizi">{{ item.creatorName }}</p>
						<span class="chuan">创建</span>
					</div>
					<button class="but">关注收藏夹</button>
					<span class="guan">{{ item.followers }}人关注</span>
				</div>
				<div class="right">
					<p class="biao">{{ item.questionTitle }}</p>
					<div class="middle">
						<p class="co">{{ item.answerAuthorName }}:</p>
						<p v-html="item.answerContent.slice(0, 63)" class="content"></p>
					</div>
					<span class="hui">回答</span>
					<span class="zan">{{ item.voteupCount }}赞同 {{ item.commentCount }}评论</span>
					<span class="can">已收藏 {{ item.totalCount }} 条内容 ></span>
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
	name: 'favorite',
	data() {
		return {
			favorites: [],
			currentPage: 1,
			count: 9,
			scroll: '',
			btnFlag: false
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/favorite/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.favorites = res.data.data;
			console.log(this.favorites.length);
		});
	},
	mounted() {
		// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
		window.addEventListener('scroll', this.scrollToTop);

		window.addEventListener('scroll', this.scrollDs, true);
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
				url: 'http://localhost:8080/api/favorite/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.favorites.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.favorites.length);
			});
		},
		scrollDs() {
			//变量scrollTop是滚动条滚动时，距离顶部的距离
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//变量windowHeight是可视区的高度
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			//变量scrollHeight是滚动条的总高度
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			//滚动条到底部的条件
			if (scrollTop + windowHeight > scrollHeight - 100) {
				//到了这个就可以进行业务逻辑加载后台数据了
				console.log('到了底部');
				this.loadMore();
			}
		}
	}
};
</script>

<style lang="scss" scoped>
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
	background-color: rgb(246, 246, 246);
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
	.zui {
		position: absolute;
		left: 60px;
	}
}
.row {
	display: flex;
	flex-wrap: wrap;
	.explore {
		display: flex;
		position: relative;
		box-shadow: 2px 5px 5px #aaa;
		width: 83%;
		margin: 1%;
		height: 188px;
		background-color: rgb(255, 255, 255);
		.left {
			position: absolute;
			top: 20px;
			width: 300px;
			height: 131px;
			border-right: 1px solid #ebebeb;
			.shou {
				position: absolute;
				left: 20px;
				height: 24px;
				line-height: 24px;
				font-size: 16px;
				font-weight: 600;
			}
			img {
				position: absolute;

				top: 40px;
				left: 20px;
			}
			.ming {
				display: flex;
				position: relative;
				top: 50px;
				left: 60px;
				.chuan {
					margin-left: 5px;
					line-height: 21px;
					font-size: 14px;
					color: #999;
				}
			}
			.but {
				position: absolute;
				top: 100px;
				left: 20px;
				border: none;
				font-weight: 700;
				width: 102px;
				height: 34px;
				background-color: rgba(0, 132, 255, 0.08);
				font-size: 14px;
				color: #0084ff;
				border-radius: 3px;
			}
			.guan {
				position: absolute;
				top: 110px;
				left: 140px;
				color: #999;
				font-size: 14px;
			}
		}
		.right {
			position: absolute;
			top: 20px;
			left: 310px;
			width: 60%;
			.biao {
				position: absolute;
				left: 10px;
				line-height: 21px;
				font-size: 15px;
				font-weight: 700;
			}
			.middle {
				display: flex;
				position: relative;
				top: 40px;
				left: 10px;
				height: 50px;
				.co {
					margin-right: 10px;
					height: 50px;
					height: 21px;
					line-height: 21px;
					color: #444;
				}
				.content {
					height: 50px;
					flex: 1;
				}
			}
			.hui {
				position: absolute;
				top: 100px;
				left: 20px;
				background-color: #f6f6f6;
				color: #999;
				font-size: 12px;
			}
			.zan {
				position: absolute;
				top: 100px;
				left: 60px;
				height: 17px;
				line-height: 17px;
				font-size: 12px;
				color: #999;
			}
			.can {
				position: absolute;
				top: 130px;
				left: 18px;
				font-size: 14px;
				color: #8590a6;
				font-weight: 500;
				height: 24px;
			}
		}
	}
}
</style>
