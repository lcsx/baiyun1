<template>
	<div>
		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<div style="padding:10px 0">
					<el-input v-model="formData.name" placeholder="请输入患者姓名查询" style="width:150px"></el-input>
					<el-select v-model="formData.selectName" placeholder="请选择">
						<el-option v-for="item in formData.selectOptions" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
						</el-option>
					</el-select>
					<!-- `checked` 为 true 或 false -->
					<el-checkbox v-model="formData.checked">属于自己角色的患者</el-checkbox>

					<el-select v-model="formData.selectState" placeholder="请选择">
						<el-option v-for="item in formData.stateOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-button>查询</el-button>
					<el-button>刷新</el-button>
					<el-button>批量执行</el-button>
					<el-button>已完成</el-button>
				</div>

			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>

		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<template>
					<el-table :data="tableData" stripe style="width: 100%">
						<el-table-column prop="name" label="姓名">
						</el-table-column>
						<el-table-column prop="num" label="编号">
						</el-table-column>
						<el-table-column prop="date" label="住院日期">
						</el-table-column>
						<el-table-column prop="state" label="状态">
						</el-table-column>
						<el-table-column>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button size="mini" @click="execute(scope.$index, scope.row)">执行</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				</template>
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
						value: '1',
						label: '住院患者'
					}, {
						value: '2',
						label: '门诊',
						disabled: true
					}],
					name: '',
					checked: '',
					stateOptions: [{
							value: '1',
							label: '已完成'
						},
						{
							value: '2',
							label: '待完成'
						}
					],
					selectState: '',
					selectName: '',
				},
				tableData: [{
						patientID: 1,
						name: 'CCC',
						num: 111,
						date: '2017-11-01',
						state: "住院"
					},
					{
						patientID: 2,
						name: 'CvC',
						num: 121,
						date: '2017-11-01',
						state: "住院"
					},
					{
						patientID: 1,
						name: 'xx',
						num: 41,
						date: '2017-11-01',
						state: "住院"
					}
				]
			}
		},
		methods: {
			execute(index, row) {
				console.log(index, row);
				this.$router.push({path:'/execution'})
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style>

</style>