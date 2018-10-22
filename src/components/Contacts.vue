<template>
	<div id="contacts">
		<mt-index-list>
			<mt-index-section index="↑">
			</mt-index-section>
			<mt-index-section index="♡">
			<ul class="ulinfo">
				<li class="lilist">
					<img src="../assets/img/newfriends.png" />
					<span>新的朋友</span>
				</li>
				<li class="lilist">
					<img src="../assets/img/gchats.png" />
					<span>群聊</span>
				</li>
				<li class="lilist">
					<img src="../assets/img/tag.png" />
					<span>标签</span>
				</li>
				<li class="lilist list-bottom">
					<img src="../assets/img/public.png" />
					<span>公众号</span>
				</li>
			</ul>
			</mt-index-section>
			<mt-index-section index="A">
				<mt-cell title="Aaron"></mt-cell>
				<mt-cell title="Alden"></mt-cell>
				<mt-cell title="Austin"></mt-cell>
			</mt-index-section>
			
			<mt-index-section index="B">
				<mt-cell title="Baldwin"></mt-cell>
				<mt-cell title="Braden"></mt-cell>
				<mt-cell title="Banana"></mt-cell>
			</mt-index-section>
			
			<mt-index-section index="Z">
				<mt-cell title="Zack"></mt-cell>
				<mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			
			<mt-index-section index="#">
			</mt-index-section>
			<mt-index-section index="8位联系人">
				
			</mt-index-section>
		</mt-index-list>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	#contacts {
		margin-top: 4rem;
	}
	
	.ulinfo {
		width: 100%;
		background: white;
	}
	
	.lilist {
		position: relative;
		background: white;
		font-size: 1.4rem;
		padding-top: .6rem;
		padding-bottom: .2rem;
		margin-left: 1rem;
		margin-right: 1rem;
		img {
			width: 2.2rem;
			height: 2.2rem;
			display: inline-block;
		}
		span {
			position: absolute;
			top: 1rem;
			left: 4.2rem;
		}
		border-bottom: 1px solid #EDEDED;
	}
	.list-bottom{
		border-bottom: 0;
	}
	
</style>