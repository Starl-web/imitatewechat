<template>
	<div id="app">
		<header>
			<span class="left">
				微信
			</span>
		</header>
		<nav>
			<router-link class='wrap' to='/chats' style='background-image: url(/src/assets/img/chats.png)'>
				<!--<img src="./assets/img/chats.png"/>-->
			</router-link>
			<router-link class='wrap' to='/contacts' style='background-image: url(/src/assets/img/contacts.png)'>
				<!--<img src="./assets/img/contacts.png"/>-->
			</router-link>
			<router-link class='wrap' to='/discover' style='background-image: url(/src/assets/img/discover.png)'>
				<!--<img src="./assets/img/discover.png"/>-->
			</router-link>
			<router-link class='wrap' to='/me' style='background-image: url(/src/assets/img/me.png)'>
				<!--<img src="./assets/img/me.png"/>-->
			</router-link>
		</nav>
		
		<router-view></router-view>
	</div>
</template>

<script>
	
	
	export default {
		name: 'app',
		data() {
			return {
				msg: ''
			}
		},
		components:{
		
		},
		methods:{
			changeColor(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	header{
		width: 100%;
		height: 4rem;
		position: fixed;
		top: 0;
		background: #040505;
		color: whitesmoke;
		font-size: 1.6rem;
		overflow: hidden;
		z-index: 9;
	}
	.left{
		line-height: 4rem;
		margin-left: 1rem;
	}
	nav{
		position: fixed;
		z-index: 9;
		bottom: 0;
		width: 100%;
		opacity: 1;
		height: 5rem;
		background: white;
		border-top: 1px solid silver;
		.wrap{
			background-position: center center;
			background-repeat: no-repeat;
			/*background-size: 25%;*/
			overflow: hidden;
			margin: 0;
			padding: 0;
			display: inline-block;
			width: 23.5%;
			height: 5rem;
			text-align: center;
			/*img{
				width: 30%;
				margin-top: 2rem;
			}*/
		}
	}	
</style>