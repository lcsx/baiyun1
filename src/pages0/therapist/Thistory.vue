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
					

					<el-select v-model="formData.selectState" placeholder="请选择">
						<el-option v-for="item in formData.stateOptions" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<el-button>查询</el-button>
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
						<el-table-column prop="patientClass" label="类型">
						</el-table-column>
						<el-table-column prop="sex" label="性别">
						</el-table-column>
						<el-table-column prop="age" label="年龄">
						</el-table-column>
						<el-table-column>
						</el-table-column>
						<el-table-column label="操作" width='300'>
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">处方单</el-button>
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
						label: '医生1'
					}, {
						value: '2',
						label: '医生2',
						disabled: true
					}],
					name: '',
					stateOptions: [{
							value: '1',
							label: '2017-11-01'
						},
						{
							value: '2',
							label: '2017-12-01'
						}
					],
					selectState: '',
					selectName: '',
				},
				tableData: [{
						patientID: 1,
						name: 'CCC',
						sex: 1,
						age: 24,
						patientClass:'住院',
						state: "已诊"
					},
					{
						patientID: 1,
						name: 'C222C',
						sex: 1,
						age: 24,
						patientClass:'住院',
						state: "已诊"
					}
				]
			}
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style>

</style>