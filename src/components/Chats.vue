<template>
	<div id="chats">
		<ul>
			<li v-for="item in list" class="lilist">
				<img :src="item.src"><span>{{item.title}}</span>
			</li>
		</ul>
		<img src="" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '我是chats界面',
				list: " ",
			}
		},
		mounted() {
			this.getData();
		},
		methods: {

			getData() {

				var api = 'http://localhost:8080/src/assets/chats.json';

				this.$http.get(api).then((response) => {
					this.list = response.data.result;
					console.log(response);
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
		}
		.lilist:last-child {
			margin-bottom: 3rem;
			border: 0;
		}
	}
	
</style>