<template>
	<div>
	<div class="row zh-shadow" v-for="(item, index) in roundTables" :key="index">
		<div class="left"><img :src="item.banner" alt="" /></div>
		
	</div>
	</div>
</template>

<script>
	export default {
		name: 'roundTable',
		data() {
			return {
				roundTables: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/roundTable/all').then(res => {
				console.log(res);
				this.roundTables = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
</style>
