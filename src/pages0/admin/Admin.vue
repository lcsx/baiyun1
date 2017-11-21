<template>
	<div class="admin-wrap">
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',

				
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//console.log(key,keyPath);
				console.log(key);
				this.$router.push({ path: key})
			},
			
		}
	}
</script>

<style>
</style>