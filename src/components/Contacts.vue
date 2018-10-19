<template>
	<div id="contacts">
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'我是contacts界面'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#contacts{
		margin-top: 4rem;
	}
</style>