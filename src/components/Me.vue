<template>
	<div id="me">
		<div id="user">
			<img src="../assets/userimg/user1.jpg" />
			<span>林中路</span>
			<span class="wxnumber">微信号：linzhonglu</span>
			<img class="qrcode" src="../assets/img/qrcode.png"/>
		</div>

		<ul class="ulinfo">
			<li class="lilist">
				<img src="../assets/img/wallet.png" /><span>钱包</span>
			</li>
		</ul>

		<ul class="ulinfo">
			<li class="lilist list-top">
				<img src="../assets/img/collect.png" /><span>收藏</span>
			</li>
			<li class="lilist list-center">
				<img src="../assets/img/album.png" /><span>相册</span>
			</li>
			<li class="lilist list-center">
				<img src="../assets/img/cardbag.png" /><span>卡包</span>
			</li>
			<li class="lilist list-bottom">
				<img src="../assets/img/emot.png" /><span>表情</span>
			</li>
		</ul>

		<ul class="ulinfo">
			<li class="lilist shezhi">
				<img src="../assets/img/setup.png" /><span>设置</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '我是me界面'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#me {
		position: fixed;
		margin-top: 4rem;
		background-color: #F5F5F5;
		min-height: 100%;
		width: 100%;
	}
	
	#user {
		position: relative;
		width: 100%;
		background: white;
		margin-top: 1rem;
		margin-bottom: 1rem;
		img {
			display: inline-block;
			width: 4rem;
			height: 4rem;
			margin: .6rem 0rem 0rem 1rem;
		}
		.qrcode{
			float: right;
			width: 2rem;
			height: 2rem;
			margin: 1.5rem 1rem;
		}
		span {
			display: inline-block;
			position: absolute;
			font-size: 1.4rem;
			top: .8rem;
			left: 6rem;
		}
		.wxnumber {
			font-size: 1rem;
			top: 2.6rem;
			color: silver;
		}
	}
	
	.ulinfo {
		width: 100%;
		background: white;
	}
	
	.lilist {
		position: relative;
		background: white;
		font-size: 1.4rem;
		padding-top: .3rem;
		padding-bottom: .2rem;
		background: white;
		margin-left: 1rem;
		margin-right: 1rem;
		img {
			width: 2.2rem;
			height: 2.2rem;
			display: inline-block;
		}
		span {
			position: absolute;
			top: .7rem;
			left: 4.2rem;
		}
	}
	
	.list-top {
		margin-top: 1rem;
		border-bottom: 1px solid #EDEDED;
	}
	.list-center{
		border-bottom: 1px solid #EDEDED;
	}
	.list-bottom{
		border-bottom: 0;
	}
	
	.ul-last {
		margin-top: 1rem;
		background-color: #F5F5F5;
		height: 12rem;
	}
	.shezhi{
		margin-top: 1rem;
	}
</style>