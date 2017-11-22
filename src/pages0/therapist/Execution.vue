<template>
	<div>
		<el-row>
			<el-col :span="12">
				<div style="padding:20px">
					<h2 style="padding:20px 0;font-size:30px">{{userInfor.name}}</h2>
					<template>
						<el-radio v-model="radio" label="1">备选项</el-radio>
						<el-radio v-model="radio" label="2">备选项</el-radio>
					</template>

					<div class="select-tb">
						<template>
							<el-table :data="userInfor.tableData"  border>
									<el-table-column prop="treatmentClass" label="治疗名称">
									</el-table-column>
									<el-table-column prop="frequency" label="频率">
									</el-table-column>
									<el-table-column prop="count1" label="执行次数">
									</el-table-column>
									<el-table-column prop="count2" label="要求次数">
									</el-table-column>
									<el-table-column prop="state" label="状态">
									</el-table-column>
									<el-table-column prop="remarks" label="备注">
									</el-table-column>							
							</el-table>
						</template>
					</div>
				</div>
			</el-col>
			<el-col :span="12">2</el-col>

		</el-row>
	</div>
</template>
</div>

<script>
	export default {
		data() {
			return {
				radio: '1',
				userInfor: {
					name: 'qwe',
					tableData: [{
						treatmentClass:"运动疗法",
						 frequency:'qd',
						  count1:1,
						  count2:10,
						  state:'执行中',
						  remarks:"无",
						  domyself:1
					},
					{
						treatmentClass:"运动疗法",
						 frequency:'qd',
						  count1:1,
						  count2:10,
						  state:'执行中',
						  remarks:"无",
						  domyself:true
					},
					{
						treatmentClass:"运动疗法",
						 frequency:'qd',
						  count1:1,
						  count2:10,
						  state:'执行中',
						  remarks:"无",
						  domyself:true
					},
					{
						treatmentClass:"运动疗法",
						 frequency:'qd',
						  count1:1,
						  count2:10,
						  state:'执行中',
						  remarks:"无",
						  domyself:true
					}]
				},

			}
		},
		methods:{
	
		}
	}
</script>

<style>
	.select-tb .el-table__body-wrapper,
	.el-table__footer-wrapper,
	.el-table__header-wrapper {
		width: 101%
	}
.el-table .info-row{
  background: #5CB85C;
}
</style>