<template lang="">
    <div>
        <button @click="bibiaoTest()">闭包测试</button>
        <p>{{ now }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            x:1
        }
    },
    methods:{
        bibiaoTest(){
            this.x++
        },
        b(res){
            res.sort()
            console.log(res);

        }
    },
    computed:{
        now(){
            return Date.now()+this.x
        }
    }

}
</script>
<style lang="">
    
</style>