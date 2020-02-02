<template>
	<div>
		<!-- 顶部tab导航 -->
		<ul class="tab-title border-bottom">
			<li v-for="(title, index) in tabTitle" @click="change(index)" :class="{ active: cur == index }" :key="index">{{ title }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'hot',
	data() {
		return {
			tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视', '校园', '汽车'],
			category: ['total', 'science', 'digital', 'sport', 'fashion', 'film', 'school', 'car'],
			tabContent: [[], [], [], [], [], [], [], []],
			cur: 0
		};
	},
	created() {}
};
</script>

<style lang="scss" scoped>
.tab-title {
	display: flex;
	align-items: center;
	height: 63px;
	padding: 0.625rem;
	background-color: #fff;
	li {
		width: 68px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 2px;
		margin: 8px;
		background-color: #f6f6f6;
		color: #646464;
		cursor: pointer;
	}
	.active {
		background-color: #e6f3ff;
		color: #0c89ff;
	}
}
</style>
