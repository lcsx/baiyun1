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
							<el-select v-model="searchForm.doctor" placeholder="选择医生" style="width: 130px;">
								<el-option label="医生1" value="1"></el-option>
								<el-option label="医生2" value="2"></el-option>
								<el-option label="医生3" value="3"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="入院时间" style="margin: 0;">
							<el-date-picker v-model="searchForm.date" type="date" placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="">查询</el-button>
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
							<el-table-column prop="name" label="日期">
							</el-table-column>
							<el-table-column prop="patientclass" label="类型">
							</el-table-column>
							<el-table-column prop="sex" label="性别">
							</el-table-column>
							<el-table-column prop="state" label="状态">
							</el-table-column>
							<el-table-column>
							</el-table-column>
							<el-table-column label="操作"  width="300">
								<template slot-scope="scope" >
									<el-button size="mini" @click="detail(scope.$index, scope.row)">详情</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">处方单</el-button>
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">治疗历史</el-button>
								</template>
							</el-table-column>
						</el-table>
					</template>
					
					<!--分页-->
					<div class="pagination-box">
						<template v-if="paginationIsShow">
							<div class="block">
								<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
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
				paginationIsShow: true,
				//分页当前页
				currentPage: 0,

				searchForm: {
					search: "",
					doctor: "",
					date: ""
				},
				//tableData
				tableData: [{
					userID:1,
					name: '王小虎',
					patientclass:"住院",
					sex:1,
					patientID:1111,
					state:"已诊"
				},{
					userID:2,
					name: '放公司',
					patientclass:"住院",
					sex:1,
					patientID:1321,
					state:"已诊"
				},
				{
					userID:3,
					name: '十多个',
					patientclass:"住院",
					sex:2,
					patientID:2345,
					state:"已诊"
				}]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			detail(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			//分页相关
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			//分页相关结束
		}
	}
</script>

<style scoped>
	.header {
		padding: 20px 0 0 0;
	}
	.pagination-box {
		text-align: center;
		padding: 100px 0 300px 0;
	}
</style>