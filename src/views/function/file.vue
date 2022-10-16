<template lang="">
    <div>
        文件创建练习
        <input type="text" v-model="fileName">
        <button @click="createFile(fileName)">新创建一个文件</button>
    </div>
</template>
<script>
import * as fs from 'fs';
export default {    
    data(){
        return {
            fileName:""
        }
    },
    
    methods:{
        createFile(fileName){
            fs.mkdir(fileName)
        }
    },

}
</script>
<style lang="">
    
</style>