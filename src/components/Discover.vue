<template>
	<div id="discover">
		<ul class="ulinfo ul-top">
			<li class="lilist">
				<img src="../assets/img/friendCircle.png"/><span>朋友圈</span>
			</li>
		</ul>	
		
		<ul class="ulinfo">
			<li class="lilist list-top scan" >
				<img src="../assets/img/scan.png"/><span>扫一扫</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/shake.png"/><span>摇一摇</span>
			</li>
		</ul>
		
		<ul class="ulinfo">
			<li class="lilist list-top">
				<img src="../assets/img/nearby.png"/><span>附近的人</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/floater.png"/><span>漂流瓶</span>
			</li>
		</ul>	
		
		<ul class="ulinfo">
			<li class="lilist list-top">
				<img src="../assets/img/shopcar.png"/><span>购物</span>
			</li>
			<li class="lilist">
				<img src="../assets/img/game.png"/><span>游戏</span>
			</li>
		</ul>
		
		<ul class="ulinfo ul-last">
			<li class="lilist sapp">
				<img src="../assets/img/sapp.png"/><span>小程序</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
			}
		}
	}
</script>

<style lang="scss" scoped>
	#discover{
		width: 100%;
		height: 100%;
		margin-top: 4rem;
		background-color: #F5F5F5;
		
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
		.list-top{
			margin-top: 1rem;
			border-bottom: 1px solid #EDEDED;
		}
		.scan{
			margin-top: 2rem;
		}
		.ul-top{
			position: relative;
			top: 1rem;
		}
		
		.ul-last{
			margin-top: 1rem;
			background-color: #F5F5F5;
			height: 12rem;
		}
		.sapp{
			margin-left: 0;
			margin-right: 0;
			padding-left: 1rem;
			span{
				left: 5.2rem;
			}
		}
	}
</style>