<template>
	<div>
		<div class="header">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item>用户管理</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div style="padding:10px 0">
			<el-input v-model="userForm.username" placeholder="请输入内容" style="width:150px"></el-input>
			<el-button type="primary">查询</el-button>
			<el-button type="primary">刷新</el-button>
			<section style="float:right">
				<el-button type="primary" @click="dialogVisible = true">添加</el-button>
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
			<el-dialog title="添加用户" :visible.sync="dialogVisible" width="30%">
				<el-form ref="form" :model="addusereform" label-width="80px" size="mini">
					<el-form-item label="姓名">
						<el-input v-model="addusereform.name" style='width:193px'></el-input>
					</el-form-item>
					<el-form-item label="性别">
						<el-select v-model="addusereform.sex" placeholder="请选择性别">
							<el-option label="男" value="1"></el-option>
							<el-option label="女" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="角色">
						<el-select v-model="addusereform.role" placeholder="请选择角色">
							<el-option label="医生" value="1"></el-option>
							<el-option label="治疗师" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="职称">
						<el-select v-model="addusereform.position" placeholder="请选择职称">
							<el-option label="1" value="1"></el-option>
							<el-option label="2" value="2"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="登录名">
						<el-input v-model="addusereform.loginID" style='width:193px'></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model="addusereform.loginPW" style='width:193px'></el-input>
					</el-form-item>
				</el-form>
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
					username: ''
				},
				multipleSelection: '',
				tableData: [{
					userID: 111,
					office: '康复科',
					name: '王小虎',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}, {
					userID: 111,
					office: '康复科',
					name: '22',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}, {
					userID: 111,
					office: '康复科',
					name: '22',
					sex: 1,
					role: 1,
					position: '主治医生',
					loginID: 'xx',
					loginPW: 'xx'
				}],
				//添加用户
				addusereform: {
					name:'',
					sex:'',
					role:'',
					loginID:'',
					loginPW:''
				},
				dialogVisible:false,
			}
		},
		methods: {
			handleSelectionChange(val) {
				this.multipleSelection = val;
				console.log(this.multipleSelection)
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