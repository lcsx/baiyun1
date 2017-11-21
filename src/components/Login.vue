<template>
	<div class="login-wrap">
		<div class="login-box">

			<h1>白云医院</h1>
			<el-form :model="loginForm" status-icon ref="loginForm" class="demo-ruleForm" :rules="rules">
				<el-form-item prop="account">
					<el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item prop="way">
					<el-select v-model="loginForm.way" placeholder="请选择登录类型" style="width: 100%;">
						<el-option label="医生登录" value="1"></el-option>
						<el-option label="治疗师登录" value="2"></el-option>
						<el-option label="后台登录" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="float: right;">
					<el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
					<el-button type="primary" @click="resetForm('loginForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>

	</div>
</template>

<script>
	import { requestLogin } from '../api/api';
	import { Loading } from 'element-ui';
	export default {
		data() {
			var checkAccount = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('用户名不能为空'));
				} else {
					callback();
				}
			};

			var passwordCheck = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			var wayCheck = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请选择登录类型'));
				} else {
					callback();
				}
			};

			return {
				loginForm: {
					account: '',
					password: '',
					way: ''
				},
				flag: false,
				rules: {
					account: [{
						validator: checkAccount,
						trigger: 'blur'
					}],
					password: [{
							validator: passwordCheck,
							trigger: 'blur',
						},
						{
							min: 3,
							max: 9,
							message: '长度在 3 到 9个字符',
							trigger: 'blur'
						}
					],
					way: [{
						validator: wayCheck,
						trigger: 'change'
					}]
				}
			}

		},
		methods: {
			submitForm(formName) {
				if(!this.flag) {
					this.flag = true //避免重复提交
					this.$refs[formName].validate((valid) => {
						if(valid) {
							let loadingInstance = Loading.service({
								lock: true,
								text: 'Loading',
								spinner: 'el-icon-loading',
								background: 'rgba(0, 0, 0, 0.7)'
							});

							var loginParams = {
								username: this.loginForm.account,
								password: this.loginForm.password,
								way: this.loginForm.way
							};
							requestLogin(loginParams).then(res => {
								this.logining = false;
								let {
									userID,
									code,
									msg,
									login_way
								} = res.data;
								if(code !== 200) {
									//								this.$message({
									//									message: msg,
									//									type: 'error'
									//								});
									console.log("不是200")
									setTimeout(() => {
										loadingInstance.close();
										this.flag = false;
									}, 2000);

								} else {
									sessionStorage.setItem('user', JSON.stringify(userID));
									console.log(msg)
									setTimeout(() => {
										loadingInstance.close();
										this.flag = false;
										let user = JSON.parse(sessionStorage.getItem('user'));
										console.log(user)
										switch(parseInt(loginParams.way)){
											case 1:this.$router.push({
														path: '/doctor'
													});
													break;
											case 2:this.$router.push({
														path: '/therapist'
													});
													break;
											case 3:this.$router.push({
														path: '/admin'
													});
													break;
											default:alert("登录错误")
										}
									}, 2000);
								}
							});
						} else {
							console.log('error submit!!');
							this.flag = false;
							return false;
						}
					});
				}

			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.login-wrap {
		width: 100%;
		height: 100%;
		background: url(../../static/images/bg.jpg);
	}
	
	.login-box {
		width: 330px;
		border-radius: 5px;
		padding: 30px 50px;
		border: 1px solid rgba(147, 184, 189, 0.8);
		box-shadow: 0pt 2px 5px rgba(105, 108, 109, 0.7), 0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
		background: rgb(247, 247, 247);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.login-box h1 {
		background: -webkit-repeating-linear-gradient(-45deg, rgb(18, 83, 93), rgb(18, 83, 93) 20px, rgb(64, 111, 118) 20px, rgb(64, 111, 118) 40px, rgb(18, 83, 93) 40px);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		font-size: 30px;
		font-family: "Hiragino Sans GB";
		font-size: 48px;
		text-align: center;
		font-weight: 600;
		padding: 0 0 50px 0;
	}
</style>