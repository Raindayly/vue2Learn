<template>
    <div>
        <div v-for="(item,index) in routeList" :key="index">
            <p> 名字:{{ item.name }} </p>
            <p> 路径:{{ 'http://localhost:8080/'  + item.path }} </p>
            <p> 组件:{{ item.component }} </p>
        </div>
    </div>
</template>

<script>
import {routes} from '@/router/router'
export default {
    data(){
        return {
            routeList:routes[0].children,
            a:1
        }
    },
    mounted(){
        console.log(this.routeList);
    }
}
</script>

<style>

</style>