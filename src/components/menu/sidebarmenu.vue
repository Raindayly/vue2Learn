<template lang="">
    <Menu theme="light">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        list
                    </template>
                    <MenuItem name="1-1" @click.native="routerPush('/content_list')">文章内容</MenuItem>
                    <MenuItem name="1-2" @click.native="routerPush('/tabs_tab')">标签页</MenuItem>
                    <MenuItem name="1-3" @click.native="routerPush('/excel')">excel导入导出</MenuItem>
                    <MenuItem name="1-4" @click.native="routerPush('/tree')">树</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
</template>
<script>
export default {
    methods:{
        routerPush(path){
            if(path == this.$route.fullPath) return
            this.$router.push(path)
        }
    }
}
</script>
<style lang="">
    
</style>