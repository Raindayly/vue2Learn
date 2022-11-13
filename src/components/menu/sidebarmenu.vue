<template lang="">
    <div>
        <div v-for="(item,index) in routeList" :key="index">
            <a :href="'http://localhost:8080/'+`${item.path}`">{{item.name}}</a>
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
<style lang="">
    
</style>