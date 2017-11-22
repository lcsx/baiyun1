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
					<el-table-column prop="configName" label="系统配置项名称">
					</el-table-column>
					<el-table-column prop="configVal" label="配置项值">
					</el-table-column>
					<el-table-column prop="explain" label="配置项说明">
					</el-table-column>
					<el-table-column prop="sign" label="配置项标记">
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
					configName:'IFC对比表',
					configVal:'',
					explain:'',
					sign:''
				},
				{
					configName:'IFC对比表',
					configVal:'',
					explain:'',
					sign:''
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