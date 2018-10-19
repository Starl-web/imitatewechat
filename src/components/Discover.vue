<template>
	<div id="discover">
		<ul class="ulinfo">
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
		</ul>	
		
		<ul class="ulinfo">
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
		</ul>
		
		<ul class="ulinfo">
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
		</ul>	
		
		<ul class="ulinfo">
			<li class="lilist list6">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'我是discover界面'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#discover{
		width: 100%;
		height: 100%;
		margin-top: 4rem;
		background-color: #E5E5E5;
		.ulinfo{
			width: 100%;
			background: white;
		}
		.lilist{
			position: relative;
			background: white;
			font-size:1.4rem;
			padding-top: .3rem ;
			padding-bottom:  .2rem;
			
			margin-left: 1rem;
			margin-right: 1rem;
			img{
				width: 2.2rem;
				height: 2.2rem;
				display: inline-block;
			}
			span{
				position: absolute;
				top: .7rem;
				left: 4.2rem;
			}
		}
		.list6{
			margin-top: 1rem;
			border-bottom: 1px solid #EDEDED;
		}
	}
</style>