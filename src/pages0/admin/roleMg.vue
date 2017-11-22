<template>
	<div>
		<div class="header">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>角色管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div style="padding:10px 0">
			<el-input v-model="userForm.rolename" placeholder="请输入内容" style="width:150px"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary">刷新</el-button>
			<section style="float:right">
				<el-button type="primary" @click="dialogVisible = true">添加角色</el-button>
				<el-button type="primary">修改</el-button>
				<el-button type="danger">删除</el-button>
			</section>

		</div>
		<div>

			<template>
				<el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection">
					</el-table-column>
					<el-table-column prop="office" label="科室名称">
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="sex" label="性别">
					</el-table-column>
					<el-table-column prop="role" label="角色">
					</el-table-column>
					<el-table-column prop="position" label="职位">
					</el-table-column>
					<el-table-column prop="loginID" label="登录名">
					</el-table-column>
					<el-table-column prop="loginPW" label="密码">
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
				userForm: {
					rolename: ''
				},
				multipleSelection: '',
				tableData: [{
					userID: 111,
					rolename: '',
					name: '王小虎',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}, {
					userID: 111,
					rolename: '康复科',
					name: '22',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}, {
					userID: 111,
					rolename: '',
					name: '22',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}],
				//添加角色的对话框
				dialogVisible: false,
				addroleform:{
					addroleinput:''
				}
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
			},
			addRole() {

			}
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