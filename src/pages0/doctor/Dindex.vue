<template>
	<div style="margin-top: 30px;">
		<div>
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<template>
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<el-tab-pane label="住院" name="zy"></el-tab-pane>
							<el-tab-pane label="门诊" name="mz"></el-tab-pane>
							<el-tab-pane label="会诊" name="hz"></el-tab-pane>
						</el-tabs>
					</template>
					
				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'zy'
			};
		},
		methods: {
			handleClick(tab, event) {
				//console.log(tab, event);
				//console.log(tab.name)
				this.$router.push({
					path: tab.name
				})
			}
		}
	};
</script>

<style></style>