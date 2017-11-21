<template>
	<div>
		<div class="header">
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<el-form :inline="true" :model="searchForm" class="demo-form-inline">
						<el-form-item style="margin: 0;">
							<el-date-picker v-model="searchForm.startDate" type="date" placeholder="开始日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item style="padding: 0 0 0 10px;">至</el-form-item>
						<el-form-item style="margin: 0;">
							<el-date-picker v-model="searchForm.EndDate" type="date" placeholder="结束日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item>						
							<el-button type="primary" @click="">打印</el-button>
						</el-form-item>
						<el-form-item>						
							<el-button type="primary" @click="">导出Word</el-button>
						</el-form-item>
						<el-form-item>						
							<el-button type="primary" @click="">导出Excel</el-button>
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
							<el-table-column prop="name" label="治疗师">
							</el-table-column>
							<el-table-column prop="patientNum" label="患者数">
							</el-table-column>
							<el-table-column prop="sex" label="执行总数">
							</el-table-column>
							<el-table-column prop="Jan" label="1月">
							</el-table-column>
							<el-table-column prop="Feb" label="2月">
							</el-table-column>
							<el-table-column prop="Mar" label="3月">
							</el-table-column>
							<el-table-column prop="Apr" label="4月">
							</el-table-column>
							<el-table-column prop="May" label="5月">
							</el-table-column>
							<el-table-column prop="Jun" label="6月">
							</el-table-column>
							<el-table-column prop="July" label="7月">
							</el-table-column>
							<el-table-column prop="Aug" label="8月">
							</el-table-column>
							<el-table-column prop="Sep" label="9月">
							</el-table-column>
							<el-table-column prop="Oct" label="10月">
							</el-table-column>
							<el-table-column prop="Nov" label="11月">
							</el-table-column>
							<el-table-column prop="Dec" label="12月">
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
					startDate: "",
					EndDate:""
				},
				//tableData
				tableData: [{
					userID:1,
					name: '任天野',
					patientNum:100,
					Jan:10,
					Feb:10,
					Mar:10,
					Apr:10,
					May:10,
					Jun:10,
					July:10,
					Aug:10,
					Sep:10,
					Oct:10,
					Nov:10,
					Dec:10
				},{
					userID:2,
					name: '单位去',
					patientNum:100,
					Jan:10,
					Feb:10,
					Mar:10,
					Apr:10,
					May:10,
					Jun:10,
					July:10,
					Aug:10,
					Sep:10,
					Oct:10,
					Nov:10,
					Dec:10
				},
				{
					userID:3,
					name: '钢化膜',
					patientNum:100,
					Jan:10,
					Feb:10,
					Mar:10,
					Apr:10,
					May:10,
					Jun:10,
					July:10,
					Aug:10,
					Sep:10,
					Oct:10,
					Nov:10,
					Dec:10
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