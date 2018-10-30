<template>
	<div id="chats">
		<ul>
			<li v-for="item in list" class="lilist">
				<img :src="item.src"><span>{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import store from '../vuex/store.js'
	
	export default {
		data() {
			return {
				msg: '',
				list: '',
			}
		},
		store,  				//实例化store
		mounted() {
			//判断store里面有无数据
			var listData = this.$store.state.list;
			
			if(listData.length > 0){
				this.list = listData;
			}else{
				this.getData();
			}
			
		},
		methods: {
			getData() {
				var api = 'http://localhost:8080/src/assets/chats.json';

				this.$http.get(api).then((response) => {
					//先请求一次，再进行缓存
					this.list = response.data.result;
					//数据放在store里
					this.$store.commit('cacheData', response.data.result)
					
				}, (err) => {
					console.log(err);
				}) 
			}
		}
		

	}
</script>

<style lang="scss" scoped>
	#chats {
		margin-top: 4rem;
		.lilist {
			position: relative;
			border-bottom: 1px solid silver;
			img {
				display: inline-block;
				width: 4rem;
				height: 4rem;
				margin: .6rem 0rem 0rem 1rem;
			}
			span {
				display: inline-block;
				position: absolute;
				font-size: 1.4rem;
				top: .6rem;
				left: 6rem;
			}
			&:last-child {
				margin-bottom: 5rem;
				border: 0;
			}
		}
	}
</style>