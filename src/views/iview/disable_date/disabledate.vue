<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <DatePicker type="datetime" v-model="billForm.startTime"
            format="yyyy-MM-dd HH:mm:ss" placeholder="选择开始时间"
            :options="dateStart"
            style="width:100%">
        </DatePicker>
        <DatePicker type="datetime" v-model="billForm.endTime"
            format="yyyy-MM-dd HH:mm:ss" placeholder="选择结束时间"
            :options="dateEnd"
                    style="width:100%">
        </DatePicker>
    </Row>
</template>
<script>
    import utils from '@/libs/utils.js'
    export default {
        data () {
            return {
                billForm:{
                    startTime : new Date("2022-11-10 21:36:00"),
                    endTime : new Date("2022-11-12 21:36:00")
                },
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < 1668087360000 ;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        },
        created(){
            let date = new Date("2022-11-10 21:36:00")
        },
        computed:{
            dateStart(){
                let _this = this 
                return {
                    disabledDate (date) 
                    {   
                        console.log('/');
                        return  date && date.valueOf() > new Date(_this.billForm.endTime).valueOf();
                    }
                }
            },
            dateEnd(){
                let _this = this
                return {
                    disabledDate (date) 
                    {
                        return  date && date.valueOf() < new Date(_this.billForm.startTime).valueOf();
                    }
                }
            }
        }
    }
</script>