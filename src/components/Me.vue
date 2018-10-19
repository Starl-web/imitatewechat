<template>
	<div id="me">
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'我是me界面'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#me{
		margin-top: 4rem;
	}
</style>