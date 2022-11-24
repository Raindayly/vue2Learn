<template>
    <div style="display: flex;">
        <div style="flex: 0 1 200px;">
            <Select 
                @on-change="userSlCg"
                :value="JSON.stringify(testForm.userInfo)"
            >
                <Option
                    v-for="(item,index) in userList"
                    :key="index"
                    :value="JSON.stringify(item)"
                    :label="item.name"
                >
                </Option>
            </Select>
        </div>
        <div style="flex: 0 1 200px;">
            <Select 
                @on-change="deptSlCg"
                :value="JSON.stringify(testForm.deptInfo)"
            >
                <Option
                    v-for="(item,index) in deptList"
                    :key="index"
                    :value="JSON.stringify(item)"
                    :label="item.name"
                >
                </Option>
            </Select>
        </div>
        <Button @click="a">atest</Button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            testForm: {
                userInfo: {
                    name: "xiaohua",
                    age: 18,
                    gender: '男'
                },
                deptInfo: {
                    name: '信息部',
                    deptId: '000001'
                }
            },
            userList: [
                {
                    name: "xiaohua",
                    age: 18,
                    gender: '男'
                },
                {
                    name: "xiaohong",
                    age: 19,
                    gender: '女'
                }
            ],
            deptList: [
                {
                    name: '信息部',
                    deptId: '000001'
                },
                {
                    name: '管理部',
                    deptId: '000002'
                },

            ]
        }
    },
    methods: {
        userSlCg(val) {
            this.testForm.userInfo = JSON.parse(val)
        },
        deptSlCg(val) {
            this.testForm.deptInfo = JSON.parse(val)
        },
        a(){
            this.a = 1
            setTimeout(function(){
                console.log(this);
            },1000)
        }
    }
}   
</script>

<style>

</style>