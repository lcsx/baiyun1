<template>
	<div>
		<el-row>
			<el-col :span="6">
				<div style="text-align: center;">
					<el-button type="primary">新建</el-button>
				</div>
				<el-tree :data="treeData" :props="defaultProps" accordion @node-click="handleNodeClick">
				</el-tree>
			</el-col>
			<el-col :span="18">
				<div class="info-top">
					<el-button>大病历</el-button>
					<el-button>病程记录</el-button>	
					<el-button>知情通知书</el-button>	
				</div>
				<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import { lcs } from '../../js/common.js'
	export default {
		data() {
			return {
				treeData: [{
					label: '病例',
					children: [{
						label: '大病历',
						path: "case"
					}]
				}, {
					label: '病程记录',
					children: [{
						label: '首次病程记录-治疗师A',
						path: 'firstRecord'
					}, {
						label: '2016111-治疗师B',
						path:'treatmentRecord'
					}]
				}, {
					label: '通知书',
				}, {
					label: '随访记录',
				}, {
					label: '检查单',
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		methods: {
			handleNodeClick(data) {
				//console.log(data.path);
				if(data.path) {
					this.$router.push({
						path: data.path
					})
				}
			}
		}
	}

	//添加label	
	//	var a = this.treeData
	//	for(var value of a){
	//		if(value.label=="病程记录"){
	//			  value.children.push({label: '通知书1'})
	//		}
	//	}
</script>

<style>
	.el-tree-node__expand-icon {
		margin-left: 20px;
	}
	
	.el-tree-node__content {
		height: 40px;
	}
	.info-top {
		padding: 10px 0;
	}
</style>