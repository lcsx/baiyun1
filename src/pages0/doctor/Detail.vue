<template>

	<div>
		<el-row style="background-color:#545c64">
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="/detail/dmain">病例</el-menu-item>
					<el-menu-item index="/detail/dtreatment">治疗</el-menu-item>
					<el-menu-item index="/detail/treamentHistory">治疗历史</el-menu-item>
					<el-menu-item index="/doctor" style="float:right">返回主页</el-menu-item>
				</el-menu>

			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
		<el-row>
			<el-col :span="1">&nbsp;</el-col>
			<el-col :span="22">
				<div class="info-top">
					<span class="info-top-padding">姓名:<span>{{patientInfo.name}}</span></span><span class="info-top-padding">年龄:<span>{{patientInfo.age}}</span></span>
					<el-button type="primary">患者详情</el-button>
					<div style="display: inline-block;padding-left: 20px;">
						<template>
							<el-select v-model="patientInfo.selectedDate" placeholder="请选择">
								<el-option v-for="item in patientInfo.date" :key="item.value" :label="item.value" :value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
				</div>
			</el-col>
			<el-col :span="1">&nbsp;</el-col>
		</el-row>
		<router-view/>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 'Dcase',
				patientInfo: {
					name: "asdf",
					age: 22,
					selectedDate: "",
					date: [{
							value: '2017-11-01',
						},
						{
							value: '2017-11-11',
						}
					]
				},
				
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
				this.$router.push({
						path: key
					})
			}
		}
	}
</script>

<style scoped>
	.info-top {
		padding: 10px 0;
	}
	
	.info-top-padding {
		padding-right: 30px;
	}
	
	.info-top-padding span {
		padding-left: 10px;
	}

</style>