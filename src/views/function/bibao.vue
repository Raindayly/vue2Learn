<template lang="">
    <div>
        <button @click="bibiaoTest(b)">闭包测试</button>
    </div>
</template>
<script>
export default {
    methods:{
        bibiaoTest(a){

            a([3,2,1])
        },
        b(res){
            res.sort()
            console.log(res);

        }
    },

}
</script>
<style lang="">
    
</style>