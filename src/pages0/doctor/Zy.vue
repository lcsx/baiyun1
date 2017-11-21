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
							<el-button type="primary" @click="addPatientdialog = true">增加患者</el-button>
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
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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

		<!--添加患者对话框-->
		<!-- Form -->

		<el-dialog title="添加患者" :visible.sync="addPatientdialog" width="62%">

			<el-form :model="addPatientForm" label-width="70px">
				<el-row :gutter="20">
					<el-col :span="8">
						<el-form-item label="姓名" style="margin: 0;">
							<el-input v-model="addPatientForm.name" placeholder="姓名" size="mini" style="width: 180px"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="性别" style="margin: 0;">
							<el-select v-model="addPatientForm.sex" placeholder="性别" size="mini" style="width: 180px;">
								<el-option label="男" value="1"></el-option>
								<el-option label="女" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="民族" style="margin: 0;">
							<el-select v-model="addPatientForm.nation" placeholder="民族" size="mini" style="width: 180px;">
								<el-option label="汉" value="1"></el-option>
								<el-option label="壮" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="身份证号" style="margin: 0;">
							<el-input v-model="addPatientForm.idNum" placeholder="身份证号" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="出生日期" style="margin: 0;">
							<el-date-picker v-model="addPatientForm.bornDate" type="date" placeholder="选择日期" size="mini" style="width: 180px;">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="年龄" style="margin: 0;">
							<el-input v-model.number="addPatientForm.age" type="number" min=0 placeholder="年龄" size="mini" style="width: 180px"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="病案号" style="margin: 0;">
							<el-input v-model.number="addPatientForm.BAnum" type="number" min=0 placeholder="病案号" size="mini" style="width: 180px"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="付款类型" style="margin: 0;">
							<el-select v-model="addPatientForm.payClass" placeholder="付款类型" size="mini" style="width: 180px;">
								<el-option label="现金" value="1"></el-option>
								<el-option label="社保" value="2"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="社保号" style="margin: 0;">
							<el-input v-model="addPatientForm.SBnum" placeholder="社保号" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="科室" style="margin: 0;">
							<el-input v-model="addPatientForm.department" placeholder="科室" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="主治医生" style="margin: 0;">
							<el-input v-model="addPatientForm.doctor" placeholder="主治医生" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="就诊类型" style="margin: 0;">
							<el-select v-model="addPatientForm.JZclass" placeholder="就诊类型" size="mini" style="width: 180px;">
								<el-option label="住院" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="病区" style="margin: 0;">
							<el-select v-model="addPatientForm.area" placeholder="病区" size="mini" style="width: 180px;">
								<el-option label="康复一区" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="病房" style="margin: 0;">
							<el-select v-model="addPatientForm.area" placeholder="病房" size="mini" style="width: 180px;">
								<el-option label="康复一区" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="床号" style="margin: 0;">
							<el-input v-model="addPatientForm.bednum" placeholder="床号" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="出生日期" style="margin: 0;">
							<el-date-picker v-model="addPatientForm.inDate" type="date" placeholder="选择日期" size="mini" style="width: 180px;">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="婚姻状况" style="margin: 0;">
							<el-select v-model="addPatientForm.isMarried" placeholder="婚姻状况" size="mini" style="width: 180px;">
								<el-option label="已婚" value="1"></el-option>
								<el-option label="未婚" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="教育程度" style="margin: 0;">
							<el-select v-model="addPatientForm.isMarried" placeholder="教育程度" size="mini" style="width: 180px;">
								<el-option label="小学" value="1"></el-option>
								<el-option label="中学" value="2"></el-option>
								<el-option label="高中" value="3"></el-option>
								<el-option label="本科" value="4"></el-option>
								<el-option label="硕士" value="5"></el-option>
								<el-option label="博士" value="6"></el-option>
								<el-option label="其他" value="7"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="职业" style="margin: 0;">
							<el-input v-model="addPatientForm.job" placeholder="职业" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="籍贯" style="margin: 0;">
							<el-input v-model="addPatientForm.nativePlace" placeholder="籍贯" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="地址" style="margin: 0;">
							<el-input v-model="addPatientForm.address" placeholder="地址" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="联系电话" style="margin: 0;">
							<el-input v-model="addPatientForm.tel" placeholder="联系电话" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="手机" style="margin: 0;">
							<el-input v-model="addPatientForm.phoneNum" placeholder="手机" size="mini" style="width: 180px;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						备注
						<el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="addPatientForm.textarea">
						</el-input>
					</el-col>
				</el-row>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="addPatientdialog = false">取 消</el-button>
				<el-button type="primary" @click="addPatientdialog = false">添 加</el-button>
			</div>
		</el-dialog>
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
				//添加患者对话框是否显示
				addPatientdialog: false,
				//添加患者表单
				addPatientForm: {
					name: "",
					region: "",
					sex: "",
					nation: "",
					idNum: "",
					bornDate: "",
					age: "",
					BAnum: "",
					payClass: "",
					SBnum: "",
					department: "",
					doctor: "",
					JZclass: "",
					area: "",
					room: "",
					bednum: "",
					inDate: "",
					isMarried: "",
					education: "",
					job: "",
					nativePlace: "",
					address: "",
					phoneNum: "",
					tel: "",
					textarea: ""
				},
				searchForm: {
					search: '',
					sclass: '',
					range: ''
				},
				//table数据
				tableData: [{
						patientID: 1,
						name: 'faker',
						num: 1001,
						sex: 1,
						age: 22,
						area: '康复一病区',
						bednum: 20171111,
						diagnosis: '脑血栓',
						date: '2017-11-11',
						doctor: '医生1',
						state: 'ss'
					},
					{
						patientID: 2,
						name: 'bang',
						num: 1002,
						sex: 1,
						age: 22,
						area: '康复一病区',
						bednum: 20171112,
						diagnosis: 'xx',
						date: '2017-11-11',
						doctor: '医生1',
						state: 'xx'
					},
					{
						patientID: 3,
						name: 'Uzi',
						num: 1003,
						sex: 1,
						age: 22,
						area: '康复一病区',
						bednum: 20171113,
						diagnosis: 'rr',
						date: '2017-11-11',
						doctor: '医生1',
						state: 'ss'
					}
				]

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
			//性别显示转换
			formatSex: function(row, column) {
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
				this.$router.push({path:'/detail'})
			},
		}
	}
</script>

<style scoped>
	.pagination-box {
		text-align: center;
		padding: 100px 0 300px 0;
	}
</style>