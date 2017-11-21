<template>
	<div>
		<div style="padding:10px 0">
			<el-button v-if="!isEdit" @click="edit">编辑</el-button>
			<el-button v-else @click="save">保存</el-button>	
			<el-button>打印</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isEdit:false
			}
		},
		methods:{
			edit(){
				this.isEdit = true;
			},
			save(){
				this.isEdit = false;
			}
		}
	}
</script>

<style>
</style>