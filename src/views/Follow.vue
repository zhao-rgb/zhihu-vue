<template>
	<div>
		<div v-for="(item, index) in followList" :key="index" class="card fill-white tiny-round border-bottom ">
			<p class="light-grey p-3">赵肖龙赞同了文章 · 19 分钟前</p>
			<div class="d-inline-flex">
				<img :src="item.target.author.avatar_url" class="mr-2 ml-3" width="24px" height="24px" />
				<h4 class="mr-2">{{ item.target.author.name }}</h4>
				<span>{{ item.target.author.headline }}</span>
			</div>
			<h3 v-if="item.target.question == null" class="mb-2 ml-3 mt-1">{{ item.target.title }}</h3>
			<h3 v-else class="mb-2 ml-3 mt-1">{{ item.target.question.title }}</h3>
			<div v-if="!flags[index]">
				<div class="d-flex p-2" v-if="item.target.thumbnail">
					<div class="fruid-col-3 mr-3"><img :src="item.target.thumbnail" class="fill tiny-round" /></div>
					<div class="fruid-col-9">
						<p class="ellipsis-4">{{ item.target.author.name }}:{{ item.target.excerpt }}</p>
						<span class="read-more link" @click="change(index)">
							<span class="deep-blue">阅读全文</span>
							<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
								<path
									d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
				</div>
				<div class="d-flex p-2 mb-4" v-else>
					<div class="fruid-col-12">
						<p class="ellipsis">{{ item.target.excerpt }}</p>
						<span class="read-more link" @click="change(index)">
							<span class="deep-blue">阅读全文</span>
							<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
								<path
									d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
									fill-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
				</div>
			</div>

			<!-- 点击“阅读全文”显示 -->
			<div v-if="flags[index]" class="pl-3 ">
				<p class="light-grey mt-2 mb-2">{{ item.target.voteup_count }}人赞同了该回答</p>
				<div v-html="item.target.content"></div>
			</div>

			<ul class="d-flex align-items-center mb-3" :class="{ active: flags[index] }">
				<button class="d-block blue-txt-btn pl-3 pr-3 ml-4 link">
					<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
						<path
							d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
							fill-rule="evenodd"
						></path>
					</svg>
					赞同{{ item.target.voteup_count }}
				</button>
				<button class="d-block blue-txt-btn pl-3 pr-3 ml-1 link">
					<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
						<path
							d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
							fill-rule="evenodd"
						></path>
					</svg>
				</button>

				<li class="ml-4 light-grey">
					<svg class="grey-icon mb-n1" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
							fill-rule="evenodd"
						></path>
					</svg>
					{{ item.target.comment_count }}条评论
				</li>
				<li class="ml-4 light-grey">
					<svg class="grey-icon mb-n1" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
							fill-rule="evenodd"
						></path>
					</svg>
					分享
				</li>
				<li class="ml-4 light-grey">
					<svg class="grey-icon mb-n1" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
							fill-rule="evenodd"
						></path>
					</svg>
					收藏
				</li>
				<li class="ml-4 light-grey">
					<svg class="grey-icon mb-n1" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path
							d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
							fill-rule="evenodd"
						></path>
					</svg>
					喜欢
				</li>
				<li class="ml-4 light-grey">
					<svg class="grey-icon" viewBox="0 0 24 24" width="1.2em" height="1.2em">
						<path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
					</svg>
				</li>
				<li class="ml-5 light-grey link" @click="change(index)" v-if="flags[index]">
					收起
					<svg class="grey-icon up" viewBox="0 0 24 24" width="24" height="24">
						<path
							d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
							fill-rule="evenodd"
						></path>
					</svg>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'follow',
	data() {
		return {
			followList: [],
			flags: []
		};
	},
	created() {
		this.axios.get('/api/follow').then(res => {
			this.followList = res.data.data.data;
			//定义一个正则规则，用来处理富文本中的图片
			const regex = new RegExp('<img', 'gi');
			for (var i = 0; i < this.recommenedList.length; i++) {
				//给每篇文章添加一个标记，默认为false，表示未展开全文
				this.flags.splice(i, 0, false);
				//将富文本中的图片处理大小
				this.recommenedList[i].target.content = this.recommenedList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
			}
		});
	},
	methods: {
		//展开、收起的切换
		change(index) {
			//将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
			this.flags.splice(index, 1, !this.flags[index]);
		}
	}
};
</script>

<style lang="scss" scoped>
.card {
	min-height: 215px;
}
.read-more {
	position: relative;
	.deep-blue-icon {
		position: absolute;
		bottom: -2px;
	}
}
.active {
	position: sticky;
	bottom: 0;
	z-index: 999;
	background-color: #fff;
	width: 100%;
	height: 50px;
	border: 1px solid #ddd;
	border-radius: 3px;
}
.up {
	transform: rotate(180deg);
}
</style>
