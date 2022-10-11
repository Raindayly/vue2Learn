<template lang="">
    <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        <template slot="extra">
            <button @click="handleTabsReduce">(extra插槽附加操作)减少</button>
        </template>
    </Tabs>
</template>
<script>
export default {
    data() {
        return {
            tabs: 2
        }
    },
    methods: {
        handleTabsAdd() {
            this.tabs++;
        },
        handleTabsReduce() {
            this.tabs--;
        }
    }
}
</script>
<style lang="">
    
</style>