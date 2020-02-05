<template>
	<div class="all">
		<div class="head">
			<svg class="Zi " fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">最新专题</h2>
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
			<router-link to="/special/all"><button class="btn-circle">查看更多专题></button></router-link>
		</div>

		<div class="head">
			<svg class="Zi" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">圆桌讨论</h2>
		</div>
		
		<div class="row">
			<div class="exploree" v-for="(item, index) in roundTables" :key="index">
				<img :src="item.banner" />
				<h3 class="name">{{ item.name }}</h3>
				<button class="butt"><h4>关注圆桌</h4></button>
				<h5 class="liu">{{ item.includeCount }}位嘉宾参与 | {{ item.visitsCount }}次浏览</h5>
				<!-- <div class="row">
					<div class="left">
						<p>{{ item.urlToken }}</p>
					</div>
				</div> -->
			</div>
		</div>
		
		<div class="k">
			<router-link to="roundtable"><button class="btn-circle">查看更多圆桌></button></router-link>
		</div>

		<div class="head">
			<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">热门收藏夹</h2>
		</div>

		<div class="row">
			<div class="explo" v-for="(item, index) in favorites" :key="index">
				<div class="top">
					<p class="biao">{{ item.title }}</p>
					<button class="bu"><h4>关注收藏夹</h4></button>
					<img :src="item.creatorAvatar" />
					<p class="mizi">{{ item.creatorName }}</p>
					<p class="guanzhu">创建 | {{ item.followers }}人关注</p>
				</div>
				<div class="middle">
					<p class="ti">{{ item.questionTitle }}</p>
					<p class="co">{{ item.answerAuthorName }}: {{ item.answerContent }}</p>
					<span class="hui">回答</span>
					<span class="zan">{{ item.voteupCount }}赞同 {{ item.commentCount }}评论</span>
				</div>
				<div class="bottom">
					<h4 class="ne">已收藏{{ item.totalCount }}条内容 ></h4>
				</div>
			</div>
		</div>
		<div class="k">
			<router-link to="collection/hot"><button class="btn-circle">查看更多收藏夹></button></router-link>
		</div>

		<div class="head">
			<svg class="Zi" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
				<path
					d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
					fill-rule="evenodd"
				></path>
			</svg>
			<h2 class="zui">专栏</h2>
		</div>
		<div class="row">
			<div class="lan" v-for="(item, index) in columnss" :key="index">
				<img :src="item.imageUrl" />
				<span class="he">{{ item.title }}</span>
				<p class="zhu">{{ item.followers }}关注 {{ item.articlesCount }}文章</p>
				<span class="des">{{ item.description.slice(0, 10) }}</span>
				<div>
					<a :href="item.url" class="buttomm" @click="go(item.url)"><h4 class="jin">进入专栏</h4></a>
				</div>
			</div>
		</div>
		<div class="k">
			<router-link to="/lan"><button class="btn-circle">查看更多专栏></button></router-link>
		</div>

		<div class="footer">
			<footer class="ExploreHomePage-footer">
				<a href="https://liukanshan.zhihu.com" target="_blank" rel="noopener noreferrer">刘看山</a>
				<a href="https://www.zhihu.com/question/19581624" target="_blank" rel="noopener noreferrer">知乎指南</a>
				<a href="https://www.zhihu.com/terms" target="_blank" rel="noopener noreferrer">知乎协议</a>
				<a href="https://www.zhihu.com/app" target="_blank" rel="noopener noreferrer">应用</a>
				<a href="https://app.mokahr.com/apply/zhihu/3819" target="_blank" rel="noopener noreferrer">工作</a>
				<a href="https://www.zhihu.com/contact" target="_blank" rel="noopener noreferrer">联系我们</a>
				<span>© 2020 知乎</span>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			specials: [],
			roundTables: [],
			favorites: [],
			columnss: [],
			answerContent: null
		};
	},
	created() {
		this.axios.get(this.$store.state.baseUrl + '/special').then(res => {
			console.log(res);
			this.specials = res.data.data;
		});
		this.axios.get(this.$store.state.baseUrl + '/roundTable').then(res => {
			console.log(res);
			this.roundTables = res.data.data;
		});
		this.axios.get(this.$store.state.baseUrl + '/favorite').then(res => {
			console.log(res);
			this.favorites = res.data.data;
		});
		this.axios.get(this.$store.state.baseUrl + '/columns').then(res => {
			console.log(res);
			this.columnss = res.data.data;
		});
	},
	methods: {
		go(page) {
			window.location.href = page;
		}
	}
};
</script>

<style lang="scss" scoped>
.all {
	background-color: rgb(246, 246, 246);
}

.row {
	display: flex;
	flex-wrap: wrap;
}
.container {
	display: block;
	margin: auto;
	width: 75%;
	margin-top: 15px;
	background-color: #f6f6f6;
}
.head {
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 40px;
	margin-bottom: 22px;
	.Zi {
		position: absolute;
		color: #0084ff;
		left: 20px;
	}
	.zui {
		position: absolute;
		left: 70px;
	}
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	width: 41%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
	img {
		height: 200px;
	}
}
.explore img {
	border-radius: 5px;
	width: 100%;
}
.exploree {
	position: relative;
	box-shadow: 2px 5px 5px #aaa;
	width: 41%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
	img {
		border-radius: 5px;
		width: 50%;
		float: right;
		height: 250px;
	}
	.name {
		position: absolute;
		bottom: 70%;
		left: 5%;
	}
	.butt {
		position: absolute;
		border: none;
		background-color: rgb(245, 245, 245);
		color: rgb(30, 134, 255);
		height: 40px;
		width: 80px;
		bottom: 45%;
		left: 80%;
		border-radius: 5px;
	}
	.liu {
		position: absolute;
		bottom: 55%;
		left: 8%;
	}
	
}
.explo {
	position: relative;
	box-shadow: 2px 5px 5px #aaa;
	width: 41%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
	.top {
		position: relative;
		height: 30%;
		img {
			position: absolute;
			top: 65px;
			left: 20px;
		}
		.biao {
			position: absolute;
			top: 20px;
			left: 20px;
			display: block;
			height: 28px;
			line-height: 28px;
			font-size: 20px;
			font-weight: 600;
		}
		.bu {
			position: absolute;
			top: 20px;
			right: 30px;
			border: none;
			color: #0084ff;
			background-color: rgba(0, 132, 255, 0.08);
			height: 40px;
			border-radius: 5px;
			font-size: 14px;
			font-weight: 600;
		}
		.guanzhu {
			position: absolute;
			top: 75px;
			left: 120px;
			font-size: 14px;
			color: #999;
		}
		.mizi {
			position: absolute;
			top: 75px;
			left: 63px;
			color: #444;
			font-weight: 500;
		}
	}
	.middle {
		position: relative;
		height: 50%;
		border-top: 1px solid #ebebeb;
		width: 90%;
		left: 20px;
		.ti {
			position: absolute;
			font-weight: 600;
			line-height: 21px;
			top: 20px;
		}
		.co {
			position: absolute;
			top: 55px;
			height: 21px;
			line-height: 21px;
			color: #444;
		}
		.hui {
			position: absolute;
			top: 180px;
			left: 5px;
			background-color: #f6f6f6;
			color: #999;
			font-size: 12px;
		}
		.zan {
			position: absolute;
			top: 180px;
			left: 45px;
			height: 17px;
			line-height: 17px;
			font-size: 12px;
			color: #999;
		}
	}
	.bottom {
		position: relative;
		height: 20%;
		font-size: 14px;
		color: #8590a6;
		.ne {
			position: absolute;
			left: 22px;
			top: 20px;
		}
	}
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
	background-color: rgb(245, 245, 245);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.k {
	display: flex;
	align-items: center;
	margin-left: 450px;
}
.introduction {
	margin-left: 30px;
}
.lan {
	position: relative;
	box-shadow: 2px 5px 5px #aaa;
	width: 235px;
	height: 313px;
	margin: 12px;
	background-color: white;
	img {
		position: absolute;
		top: 25px;
		left: 70px;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		cursor: pointer;
	}
	.he {
		position: absolute;
		top: 120px;
		left: 85px;
		line-height: 22px;
		font-size: 16px;
		font-weight: 600;
	}
	.zhu {
		position: absolute;
		top: 150px;
		left: 60px;
		height: 17px;
		line-height: 17px;
		font-size: 12px;
		color: #999;
	}
	.des {
		position: absolute;
		top: 190px;
		left: 50px;
		height: 40px;
		line-height: 20px;
		font-size: 14px;
		color: #444;
		text-align: center;
	}
	.buttomm {
		position: absolute;
		top: 250px;
		left: 70px;
		border: none;
		color: #0084ff;
		background-color: rgba(0, 132, 255, 0.08);
		height: 34px;
		width: 88px;
		border-radius: 5px;
		font-size: 14px;
		font-weight: 600;
		.jin {
			position: absolute;
			top: 5px;
			left: 15px;
		}
	}
}
.footer {
	position: relative;
	height: 195px;
	.ExploreHomePage-footer {
		position: absolute;
		left: 360px;
		margin-top: 64px;
		align-items: center;
		height: 24px;
		font-size: 13px;
		color: #8590a6;
	}
}

a {
	color: #8590a6;
	margin: 5px;
}
</style>
