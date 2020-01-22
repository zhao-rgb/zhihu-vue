<template>
	<div>
		<div class="nav">
			<router-link to="/">
				<svg viewBox="0 0 200 91" class="ZhihuLogo" style="height:30px;width:64px" width="64" height="30" aria-hidden="true">
					<title></title>
					<g>
						<path
							d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
							fill-rule="evenodd"
						></path>
					</g>
				</svg>
			</router-link>
			<button type="button" class="Button--blue">
				<svg class="Zi" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
					<path
						d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"
					></path>
				</svg>
				<span class="xie">写文章</span>
			</button>
			<svg class="Zi--Dots" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
				<path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
			</svg>
		</div>

		<div class="bc"><img src="../assets/image/4.png" /></div>

		<div class="all">
			<div class="middle">
				<div class="writeA"><button class="writeArticle">开始写文章</button></div>

				<div class="shen">
					<a href="https://www.zhihu.com/column/request"><p class="shent">申请开通专栏></p></a>
				</div>

				<div class="lann"><p class="lanfa">专栏 · 发现</p></div>
			</div>
			<div class="zhuan">
				<div class="lan" v-for="(item, index) in columnss" :key="index">
					<img :src="item.imageUrl" />
					<div class="titlei">
						<p class="he">{{ item.title }}</p>
					</div>
					<div class="middlei">
						<span class="des">{{ item.description.slice(0, 10) }}</span>
					</div>
					<div class="zhui">
						<p class="zhu">{{ item.followers }}关注 | {{ item.articlesCount }}文章</p>
					</div>
					<a :href="item.url" class="buttomm" @click="go(item.url)"><h4 class="jin">进入专栏</h4></a>
				</div>
			</div>
			<div class="huan">
				<button type="button" class="Button--withLabel" @click="loadMore">
					<span style="display:inline-flex;align-items:center">
						​
						<svg class="Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
							<path
								d="M20 12.878C20 17.358 16.411 21 12 21s-8-3.643-8-8.122c0-4.044 3.032-7.51 6.954-8.038.034-1.185.012-1.049.012-1.049-.013-.728.461-1.003 1.057-.615l3.311 2.158c.598.39.596 1.026 0 1.418l-3.31 2.181c-.598.393-1.08.12-1.079-.606 0 0 .006-.606-.003-1.157-2.689.51-4.675 2.9-4.675 5.708 0 3.21 2.572 5.822 5.733 5.822 3.163 0 5.733-2.612 5.733-5.822 0-.633.51-1.148 1.134-1.148.625 0 1.133.515 1.133 1.148"
								fill-rule="evenodd"
							></path>
						</svg>
					</span>
					换一换
				</button>
			</div>
			<div class="bei">
				<img src="../assets/image/5.png" />
				<div class="zhihu"><h3 class="ColumnHomeBottom-title">在知乎创作</h3></div>
				<button class="requestButton">申请专栏</button>
			</div>
			<div class="yewei">
				<footer class="ColumnHomeBottom-footer">
					<span>
						©
						<!-- -->
						2020
						<!-- -->
						知乎
					</span>
					<span>·</span>
					<a target="_blank" href="http://localhost:9090/#/lan" rel="noopener noreferrer">知乎专栏</a>
					<span>·</span>
					<a target="_blank" href="http://localhost:9090/#/roundtable" rel="noopener noreferrer">圆桌</a>
					<span>·</span>
					<a target="_blank" href="http://localhost:9090/#/explore" rel="noopener noreferrer">发现</a>
					<span>·</span>
					<a target="_blank" href="https://www.zhihu.com/app" rel="noopener noreferrer">移动应用</a>
					<span>·</span>
					<a href="http://localhost:9090/#/home/recommoned">使用机构帐号登录</a>
					<span>·</span>
					<a href="https://www.zhihu.com/contact">联系我们</a>
					<span>·</span>
					<a target="_blank" href="https://www.zhihu.com/careers" rel="noopener noreferrer">来知乎工作</a>
					<br />
					<a href="https://tsm.miit.gov.cn/dxxzsp/" target="_blank" rel="noopener noreferrer">京 ICP 证 110745 号</a>
					<span>·</span>
					<a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京 ICP 备 13052560 号 - 1</a>
					<span>·</span>
					<a target="_blank" rel="noopener noreferrer" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
						<img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" />
						京公网安备 11010802010035 号
					</a>
					<span>·</span>
					<a href="http://zhstatic.zhihu.com/assets/zhihu/publish-license.jpg" target="_blank" rel="noopener noreferrer">出版物经营许可证</a>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'columns',
	data() {
		return {
			columnss: [],
			count: 8,
			currentPage: 2
		};
	},
	created() {
		this.axios({
			method: 'post',
			url: 'http://localhost:8080/api/columns/page',
			params: {
				count: this.count,
				currentPage: this.currentPage
			}
		}).then(res => {
			console.log(res.data.data);
			this.columnss = res.data.data;
			console.log(this.columnss.length);
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/columns/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				this.columnss = res.data.data;
				console.log(this.columnss.length);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.all {
	background-color: rgb(251, 252, 252);
}
.nav {
	height: 52px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background-color: white;
	border-bottom: 1px solid #ebebeb;
	.ZhihuLogo {
		position: absolute;
		top: 10px;
		left: 260px;
		height: 30px;
		width: 64px;
		fill: #0084ff;
	}
	.Button--blue {
		position: absolute;
		top: 10px;
		right: 325px;
		color: #0084ff;
		font-size: 14px;
		line-height: 32px;
		height: 34px;
		width: 93px;
		text-align: center;
		cursor: pointer;
		background: none;
		border: 1px solid;
		border-radius: 3px;
	}
	.Zi--Dots {
		position: absolute;
		right: 276px;
		top: 15px;
		width: 24;
		height: 24;
		font-size: 14px;
		color: #8590a6;
		text-align: center;
		cursor: pointer;
	}
}
.Zi {
	position: absolute;
	left: 8px;
	top: 2px;
}

.xie {
	position: relative;
	left: 10px;
}
.bc {
	height: 470px;
	img {
		width: 100%;
		height: 100%;
	}
}
.middle {
	height: 150px;
	.writeA {
		height: 40px;
		width: 100%;
		text-align: center;
		.writeArticle {
			height: 38px;
			width: 120px;
			border-color: #444;
			line-height: 36px;
			font-size: 14px;
			text-align: center;
			cursor: pointer;
			background: none;
			border: 1px solid;
			border-radius: 3px;
		}
	}
	.shen {
		margin-top: 20px;
		height: 15px;
		width: 100%;

		.shent {
			font-size: 14px;
			line-height: 12px;
			background-color: transparent;
			border: none;
			border-radius: 0;
			color: #11a668;
			text-align: center;
			cursor: pointer;
			background: none;
		}
	}
	.lann {
		height: 26px;
		width: 100%;
		margin-top: 36px;

		text-align: center;
		.lanfa {
			color: #1a1a1a;
			font-size: 14px;
			line-height: 22px;
			font-weight: 600;
		}
	}
}
.zhuan {
	position: relative;
	left: 325px;
	display: flex;
	flex-wrap: wrap;
	height: 600px;
	width: 900px;
	.lan {
		position: relative;
		box-shadow: 2px 5px 5px #aaa;
		width: 22%;
		height: 270px;
		margin: 10px;
		background-color: white;
		img {
			position: absolute;
			top: 25px;
			left: 70px;
			width: 48px;
			height: 48px;
			border-radius: 50%;
			cursor: pointer;
		}
		.titlei {
			position: absolute;
			top: 83px;
			width: 100%;
			height: 30px;
			text-align: center;
			.he {
				line-height: 22px;
				font-size: 16px;
				font-weight: 600;
			}
		}
		.zhui {
			position: absolute;
			top: 160px;
			width: 100%;
			text-align: center;
			.zhu {
				height: 17px;
				color: grey;
				font-size: 14px;
				margin-top: 14px;
			}
		}
		.middlei {
			position: absolute;
			width: 100%;
			top: 130px;
			text-align: center;
			.des {
				height: 40px;
				color: grey;
				font-size: 14px;
				line-height: 21px;
				text-align: center;
			}
		}
		.buttomm {
			position: absolute;
			top: 210px;
			left: 60px;
			color: #11a668;
			border: 1px solid #11a668;
			background-color: white;
			height: 34px;
			width: 88px;
			border-radius: 5px;
			font-size: 14px;
			font-weight: 600;
			text-align: center;
			.jin {
				position: absolute;
				top: 6px;
				left: 14px;
			}
		}
	}
}

.huan {
	height: 103px;
	.Button--withLabel {
		position: relative;
		left: 710px;
		top: 20px;
		border-color: #444;
		color: #444;
		width: 98px;
		font-size: 14px;
		line-height: 32px;
		cursor: pointer;
		background: none;
		border: 1px solid;
		border-radius: 3px;
	}
}
.bei {
	position: relative;
	height: 320px;
	background-color: red;
	img{
		width: 100%;
		height: 100%;
	}
	.zhihu {
		position: absolute;
		top: 120px;
		left: 600px;
		border: solid #97ffd8;
		border-width: 1px 0;
		font-size: 18px;
		font-weight: 300;
		letter-spacing: 14px;
		padding: 26px 0;
		text-align: center;
		white-space: nowrap;
		width: 345px;
		margin: 0;
		font: inherit;
		color: #444;
	}
	.requestButton {
		position: absolute;
		top: 210px;
		left: 700px;
		border-color: #444;
		box-sizing: border-box;
		color: #444;
		line-height: 36px;
		margin-top: 40px;
		height: 38px;
		width: 120px;
		padding: 0 16px;
		font-size: 14px;
		text-align: center;
		cursor: pointer;
		background: none;
		border: 1px solid;
		border-radius: 3px;
	}
}
.yewei {
	height: 140px;
	background-color: rgb(251,252,252);
	.ColumnHomeBottom-footer {
		color: grey;
		font-size: 12px;
		line-height: 22px;
		text-align: center;
		margin: 80px 0 60px;
		padding: 0 12px;
		display: block;
	}
}
a {
	color: grey;
	
}
</style>
