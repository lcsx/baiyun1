<template>
	<div class="doctor-wrap">
		<div class="header">
			<el-row>
				<el-col :span="1">&nbsp;</el-col>
				<el-col :span="22">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<div class="fl top-title" @click="goto('/doctor')">
							白云医院康复信息系统
						</div>
						<el-menu-item index="/doctor/dindex">主页</el-menu-item>
						<el-menu-item index="/doctor/dhistory">历史查询</el-menu-item>
						<el-menu-item index="/doctor/dinfor">统计信息</el-menu-item>
						<div class="fr user-box">
							<span class="userid">{{ user}}</span>
							<el-submenu index="2">
								<template slot="title">我的工作台</template>
								<el-menu-item index="" @click="logoutDialogVisible = true">注销</el-menu-item>
								<el-menu-item index="">个人信息</el-menu-item>
								<el-menu-item index="">关于系统</el-menu-item>
							</el-submenu>
						</div>

					</el-menu>
				</el-col>
				<el-col :span="1">&nbsp;</el-col>
			</el-row>
		</div>
		<div>
			<router-view/>
		</div>

		<!--对话框-->
		<el-dialog title="提示" :visible.sync="logoutDialogVisible" width="30%">
			<span>确定要注销登录么?</span>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="logoutDialogVisible = false">取 消</el-button>
			    <el-button @click="handleClose" type="danger">确 定</el-button>
			  </span>
		</el-dialog>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/doctor/dindex',
				logoutDialogVisible: false,
				user: "1"
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				//console.log(key,keyPath);
				console.log(key);
				this.$router.push({
					path: key
				})
			},
			goto(key) {
				this.$router.push({
					path: key
				})
			},
			handleClose(done) {
				this.$confirm('确认注销？')
					.then(_ => {
						done(this.logoutDialogVisible = false,
							this.$router.push({
								path: '/login'
							}));
					})
					.catch(_ => {});
			}

		},
		mounted() {
			let user = JSON.parse(sessionStorage.getItem('user'));
			if(!user) {
				this.$router.push({
					path: '/login'
				});
			}
			this.user = user
		}
	}
</script>

<style>
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.top-title {
		line-height: 60px;
		font-size: 30px;
		font-weight: 600;
		background: -webkit-repeating-linear-gradient(0deg, rgb(18, 83, 93), rgb(18, 83, 93) 20px, rgb(64, 111, 118) 20px, rgb(64, 111, 118) 40px, rgb(18, 83, 93) 40px);
		background: -0-repeating-linear-gradient(0deg, rgb(18, 83, 93), rgb(18, 83, 93) 20px, rgb(64, 111, 118) 20px, rgb(64, 111, 118) 40px, rgb(18, 83, 93) 40px);
		background: -moz-repeating-linear-gradient(0deg, rgb(18, 83, 93), rgb(18, 83, 93) 20px, rgb(64, 111, 118) 20px, rgb(64, 111, 118) 40px, rgb(18, 83, 93) 40px);
		background: repeating-linear-gradient(0deg, rgb(18, 83, 93), rgb(18, 83, 93) 20px, rgb(64, 111, 118) 20px, rgb(64, 111, 118) 40px, rgb(18, 83, 93) 40px);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		font-family: "Hiragino Sans GB";
		margin: 0 100px 0 0;
	}
	
	.top-title:hover {
		cursor: pointer;
	}
	
	.fl {
		float: left;
	}
	
	.fr {
		float: right;
	}
	
	.userid {
		line-height: 60px;
		float: left;
		font-size: 14px;
		color: deepskyblue
	}
	
	.user-box:focus {
		outline: none
	}
</style>