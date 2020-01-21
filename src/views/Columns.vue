<template>
	<div>
		<div class="nav">
			<svg viewBox="0 0 200 91" class="ZhihuLogo" style="height:30px;width:64px" width="64" height="30" aria-hidden="true">
				<title></title>
				<g>
					<path
						d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
						fill-rule="evenodd"
					></path>
				</g>
			</svg>
			<button type="button" class="Button--blue">
				<svg class="Zi" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
					<path
						d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"
					></path>
				</svg>
				<span class="xie">写文章</span>
			</button>
		</div>
		<div class="bc"><img src="../assets/image/3.png" /></div>
		<div class="middle"><h1>osj2os2</h1></div>
		<div class="zhuan">
			<div class="lan" v-for="(item, index) in columnss" :key="index">
				<img :src="item.imageUrl" />
				<span class="he">{{ item.title }}</span>
				<p class="zhu">{{ item.followers }}关注 | {{ item.articlesCount }}文章</p>
				<span class="des">{{ item.description.slice(0, 10) }}</span>
				<div class="ji">
					<a :href="item.url" class="buttomm" @click="go(item.url)"><h4 class="jin">进入专栏</h4></a>
				</div>
			</div>
		</div>
		<button @click="loadMore">换一换</button>
	</div>
</template>

<script>
export default {
	name: 'columns',
	data() {
		return {
			columnss: [],
			count: 8,
			currentPage: 1
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
		border-color: #0084ff;
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
	height: 200px;
	background-color: red;
}
.zhuan {
	position: relative;
	left: 340px;
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
		.he {
			position: absolute;
			top: 79px;
			left: 65px;
			line-height: 22px;
			font-size: 16px;
			font-weight: 600;
		}
		.zhu {
			position: absolute;
			top: 170px;
			left: 60px;
			height: 17px;
			color: grey;
			font-size: 14px;
			margin-top: 14px;
		}
		.des {
			position: absolute;
			top: 130px;
			left: 50px;
			height: 40px;
			color: grey;
			font-size: 14px;
			line-height: 21px;
			text-align: center;
		}
		.buttomm {
			position: absolute;
			top: 200px;
			left: 70px;		
			color: #11a668;
			border-color: #11a668;
			background-color: white;
			height: 34px;
			width: 88px;
			border-radius: 5px;
			font-size: 14px;
			font-weight: 600;
		}
	}
}
.ji{

}
</style>
