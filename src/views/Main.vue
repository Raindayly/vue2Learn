<template>
	<div class="container-main-main">
		<div class="sidebarmenu">
			<Sidebarmenu></Sidebarmenu>
		</div>
		<div class="main-center">
			<h1>view组件</h1>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Sidebarmenu from "@/components/menu/sidebarmenu.vue";
	export default {
		components: { Sidebarmenu },
	};
</script>

<style>
	.container-main-main {
		display: flex;
	}
	.main-center {
		flex: 10 1 0;
	}
	.sidebarmenu {
		flex: 1 1 0;
	}
</style>