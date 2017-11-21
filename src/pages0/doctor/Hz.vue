<template>
	<div>
		<div class="header">
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<el-form :inline="true" :model="searchForm" class="demo-form-inline">
						<el-form-item>
							<el-input v-model="searchForm.search" placeholder="输入患者姓名或首字母拼音" prefix-icon="el-icon-search"></el-input>
						</el-form-item>
						<el-form-item>
							<el-select v-model="searchForm.sclass" placeholder="患者类型" style="width: 130px;">
								<el-option label="住院患者" value="1"></el-option>
								<el-option label="门诊患者" value="2"></el-option>
								<el-option label="会诊患者" value="3"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-select v-model="searchForm.range" placeholder="选择范围" style="width: 130px;">
								<el-option label="全部医生" value="1"></el-option>
								<el-option label="我的患者" value="2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">查询</el-button>
						</el-form-item>
						<el-form-item style="float: right;">
							<el-button type="primary" @click="addPatient">增加患者</el-button>
						</el-form-item>
					</el-form>
					
					
					
					
					
				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>

		</div>
		<div class="tb">
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<template>
						<el-table :data="tableData" stripe style="width: 100%">
							<el-table-column prop="name" label="姓名">
							</el-table-column>
							<el-table-column prop="num" label="住院号">
							</el-table-column>
							<el-table-column prop="sex" label="性别" :formatter="formatSex">
							</el-table-column>
							<el-table-column prop="age" label="年龄">
							</el-table-column>
							<el-table-column prop="area" label="病区">
							</el-table-column>
							<el-table-column prop="bednum" label="病床号">
							</el-table-column>
							<el-table-column prop="diagnosis" label="诊断">
							</el-table-column>
							<el-table-column prop="date" label="日期">
							</el-table-column>
							<el-table-column prop="doctor" label="主治医生">
							</el-table-column>
							<el-table-column prop="state" label="状态">
							</el-table-column>
							 <el-table-column label="操作">
							      <template slot-scope="scope">
							        <el-button
							          size="mini"
							          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							      </template>
							    </el-table-column>
						</el-table>
					</template>
					<!--分页-->
					<div class="pagination-box">
						<template v-if="paginationIsShow" >
						  <div class="block">
						    <el-pagination
						      @size-change="handleSizeChange"
						      @current-change="handleCurrentChange"
						      :current-page="currentPage"
						      :page-sizes="[100, 200, 300, 400]"
						      :page-size="100"
						      layout="total, sizes, prev, pager, next, jumper"
						      :total="400">
						    </el-pagination>
						  </div>
						</template>
					</div>
					
				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//分页是否显示
				paginationIsShow:true,
				//分页当前页
				 currentPage: 0,
				 
				searchForm: {
					search: '',
					sclass: '',
					range: ''
				},
				//table数据
				tableData: [{
					patientID: 1,
					name: 'sasd',
					num: 10211,
					sex: 1,
					age:14,
					area:'康复一病区',
					bednum:20171111,
					diagnosis:'sda',
					date:'2017-11-11',
					doctor:'医生1',
					state:'ss'
				},
				{
					patientID: 2,
					name: '123f',
					num: 12202,
					sex: 1,
					age:22,
					area:'康复一病区',
					bednum:20171112,
					diagnosis:'xx',
					date:'2017-11-11',
					doctor:'医生1',
					state:'xx'
				},
				{
					patientID: 3,
					name: 'Uzi',
					num: 1003,
					sex: 1,
					age:22,
					area:'康复一病区',
					bednum:20171113,
					diagnosis:'rr',
					date:'2017-11-11',
					doctor:'医生1',
					state:'ss'
				}]

			}
		},
		methods: {
			onSubmit() {
				let search = this.searchForm.search;
				let sclass = this.searchForm.sclass;
				let range = this.searchForm.range;
				//三个输入都为空的时候不提交查询请求
				if(!search && !sclass && !range) {
					return false
				}
				console.log(this.searchForm);
			},
			addPatient() {

			},
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//分页相关
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      },
		      //编辑按钮
		       handleEdit(index, row) {
		        console.log(index, row);
		      },
		}
	}
</script>

<style scoped>
.pagination-box{text-align: center;padding: 100px 0 300px 0;}
</style>