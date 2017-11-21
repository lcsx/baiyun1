<template>
	<div>
		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<div>
					<el-date-picker v-model="formData.startDate" type="date" placeholder="选择日期">
					</el-date-picker>
					<el-date-picker v-model="formData.endDate" type="date" placeholder="选择日期">
					</el-date-picker>
					<el-button>新建</el-button>
					<span style="padding:0 20px">治疗项目数:<span style="padding-left:10px">{{formData.treamentAmount}}</span></span>
					<span style="padding:0 20px">费用总计:<span style="padding-left:10px">{{formData.totalPrice}}</span></span>
					<el-button>编辑</el-button>
					<el-button>打印</el-button>
				</div>
				<div>
					<template>
						<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
							<el-table-column type="selection">
							</el-table-column>
							<el-table-column prop="treamtClass" label="名称">
							</el-table-column>
							<el-table-column prop="amount" label="数量">
							</el-table-column>
							<el-table-column prop="frequency" label="频率">
							</el-table-column>
							<el-table-column prop="time" label="时间">
							</el-table-column>
							<el-table-column prop="" label="配置">
							</el-table-column>
							<el-table-column prop="executor" label="执行人">
							</el-table-column>
							<el-table-column prop="equipment" label="设备">
							</el-table-column>
							<el-table-column prop="state" label="状态">
							</el-table-column>
							<el-table-column prop="cost" label="费用">
							</el-table-column>
							<el-table-column prop="issued" label="下达人">
							</el-table-column>
							<el-table-column prop="date" label="下达日期">
							</el-table-column>
						</el-table>
					</template>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					startDate: "",
					endDate: "",
					treamentAmount: 3,
					totalPrice: 200
				},
				tableData3: [{
					treamtClass: '1',
					amount: 10,
					frequency: 'qd',
					time: 20,
					executor: '治疗师A',
					equipment: '四肢联动',
					state: '已下达',
					cost: 50,
					issued: '医生a',
					date: '2017-11-01'
				},
				{
					treamtClass: '1',
					amount: 10,
					frequency: 'qd',
					time: 20,
					executor: '治疗师A',
					equipment: '四肢联动',
					state: '已下达',
					cost: 50,
					issued: '医生a',
					date: '2017-11-01'
				},
				{
					treamtClass: '1',
					amount: 10,
					frequency: 'qd',
					time: 20,
					executor: '治疗师A',
					equipment: '四肢联动',
					state: '已下达',
					cost: 50,
					issued: '医生a',
					date: '2017-11-01'
				}],
				multipleSelection: []

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

</style>