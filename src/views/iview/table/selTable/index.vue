<template>
	<div class="flex">
		<div class="pd10" style="flex: 1 1 0">
			<Table :columns="columns1" :data="data1"></Table>
		</div>
		<div class="pd10" style="flex: 1 1 0">
			{{ data1 }}
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				columns1: [
					{
						title: "Name",
						key: "name",
					},
					{
						title: "Age",
						key: "age",
					},
					{
						title: "Address",
						key: "address",
						render: (h , params)=>{
							var self = this
							return h(
								'Select'
								,{	
									domProps: {
										value: params.row.address
									},
									on: {
										input: function (data) {
											self.$emit('input', data)
										}
									}
								},
								[
									h('Option',{
										props:{
											'value':'New York No. 1 Lake Park'
										}
									},'New York No. 1 Lake Park')
								]
							)
						}
					},
				],
				data1: [
					{
						name: "John Brown",
						age: 18,
						address: "New York No. 1 Lake Park",
						date: "2016-10-03",
					},
					{
						name: "Jim Green",
						age: 24,
						address: "London No. 1 Lake Park",
						date: "2016-10-01",
					},
					{
						name: "Joe Black",
						age: 30,
						address: "Sydney No. 1 Lake Park",
						date: "2016-10-02",
					},
					{
						name: "Jon Snow",
						age: 26,
						address: "Ottawa No. 2 Lake Park",
						date: "2016-10-04",
					},
				],
			};
		},
	};
</script>

<style lang="less" scoped>
	@import "@/assets/css/common.css";
	@import "./index.less";
</style>
