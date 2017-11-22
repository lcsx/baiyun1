<template>
	<div>
		<div class="header">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>配置</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div style="padding:10px 0">
			<el-input v-model="searchInput" placeholder="搜索系统配置项" style="width:150px"></el-input>
			<el-button type="primary">查询</el-button>
			<section style="float:right">
				<el-button type="primary" @click="dialogVisible = true">新建</el-button>
				<el-button type="danger">删除</el-button>
			</section>

		</div>
		<div>

			<template>
				<el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection">
					</el-table-column>
					<el-table-column prop="equipmentName" label="设备类型名称">
					</el-table-column>
					<el-table-column prop="room" label="治疗地点">
					</el-table-column>
					<el-table-column prop="description" label="设备描述">
					</el-table-column>
					<el-table-column prop="config" label="设备配置">
					</el-table-column>
					<el-table-column prop="forecast" label="预测试模块">
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						</template>
					</el-table-column>
					<el-table-column>
					</el-table-column>
				</el-table>
			</template>
		</div>

		<section>
			<el-dialog title="添加角色" :visible.sync="dialogVisible" width="30%">
				<el-input v-model="addroleform.addroleinput" placeholder="请输入角色名称"></el-input>
				<span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible = false">取 消</el-button>
				    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				 </span>
			</el-dialog>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchInput: '',
				multipleSelection: '',
				tableData: [{
					equipmentName:'功率自行车',
					room:'作业治疗法',
					description:'',
					config:'',
					forecast:''
				}],
				//添加角色的对话框
				dialogVisible: false,
				addroleform: {
					addroleinput: ''
				}
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
		}
	}
</script>

<style>
	.el-table__body-wrapper,
	.el-table__footer-wrapper,
	.el-table__header-wrapper {
		width: 101%
	}
</style>