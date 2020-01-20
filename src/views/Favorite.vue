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

		<div class="sss">
			<div>
				<a href="#top"><i class="iconfont shadow" style="font-size: 60px; color: red;">&#xe6ab;</i></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'favorite',
	data() {
		return {
			favorites: []
		};
	},
	created() {
		this.axios.get(this.$store.state.baseUrl + '/favorite/all').then(res => {
			console.log(res);
			this.favorites = res.data.data;
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
.sss {
	width: 50px;
	height: 50px;
	position: fixed;
	right: 70px;
	bottom: 40px;
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
