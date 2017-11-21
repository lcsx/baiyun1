<template>
	<div>
		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<div>
					<el-select v-model="formData.selectVal" placeholder="请选择">
						<el-option v-for="item in formData.selectOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<span>{{formData.selectVal}}</span>
					<el-date-picker v-model="formData.date" type="date" placeholder="日期">
					</el-date-picker>
					<el-select v-model="formData.DoctorselectVal" placeholder="请选择">
						<el-option v-for="item in formData.DoctorselectOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<span>{{formData.DoctorselectVal}}</span>
					<el-button>查询</el-button>
				</div>
				<div>
					<template>
						<el-table :data="tableData" stripe style="width: 100%">
							<el-table-column prop="treamtClass" label="治疗项名称">
							</el-table-column>
							<el-table-column prop="date" label="治疗日期">
							</el-table-column>
							<el-table-column prop="executor" label="执行人">
							</el-table-column>
							<el-table-column prop="issued" label="下达人">
							</el-table-column>
							<el-table-column prop="state" label="状态">
							</el-table-column>
							<el-table-column prop="effect" label="效果">
							</el-table-column>
							<el-table-column prop="remarks" label="备注">
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
					selectOptions: [{
						value: '治疗师1',
						label: '治疗师1'
					}, {
						value: '治疗师2',
						label: '治疗师2'
					}, {
						value: '治疗师3',
						label: '治疗师3'
					}],
					DoctorselectOptions: [{
						value: '1',
						label: '医生1'
					}, {
						value: '2',
						label: '医生2'
					}, {
						value: '3',
						label: '医生3'
					}],
					DoctorselectVal: '',
					date: ""
				},
				tableData: [{
					treamtClass:1,
					date:'2017-11-01',
					executor: '治疗师A',
					issued: '医生a',
					state:'已完成',
					effect:'治愈',
					remarks:''
				}, {
					treamtClass:1,
					date:'2017-11-01',
					executor: '治疗师A',
					issued: '医生a',
					state:'已完成',
					effect:'治愈',
					remarks:''
				}]
			}
		}
	}
</script>

<style>

</style>