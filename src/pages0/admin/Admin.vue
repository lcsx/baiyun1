<template>
	<div class="admin-wrap">
		<el-row>
			<el-col :span="5">
				<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select='goto' background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<!--<template slot="title">分组一</template>-->
							<el-menu-item index="/admin/userMg">用户管理</el-menu-item>
							<el-menu-item index="/admin/roleMg">角色管理</el-menu-item>
							<el-menu-item index="/admin/rightMg">权限管理</el-menu-item>
						</el-menu-item-group>
						<!--<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>-->
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>医院信息管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/admin/officeMg">科室</el-menu-item>
							<el-menu-item index="/admin/areaMg">病区</el-menu-item>
							<el-menu-item index="/admin/roomMg">病房</el-menu-item>
							<el-menu-item index="/admin/bedMg">病床</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>治疗管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/admin/treamentItems">治疗项目</el-menu-item>
							<el-menu-item index="/admin/costItems">收费项目</el-menu-item>
							<el-menu-item index="/admin/treatment">治疗方法</el-menu-item>
							<el-menu-item index="/admin/frequency">治疗频率</el-menu-item>
							<el-menu-item index="/admin/treatmentRoom">治疗室</el-menu-item>
							<el-menu-item index="/admin/equipment">设备管理</el-menu-item>
							<el-menu-item index="/admin/parts">部位</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>系统配置</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/admin/config">科室</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="19">
				<div style="padding:20px">
					<router-view></router-view>
				</div>
				
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
				
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			goto(key,keyPath) {
				console.log(key, keyPath);
				this.$router.push({path:key})
			},
		}
	}
</script>

<style>

</style>