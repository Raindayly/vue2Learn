<style lang="less">
    @import "./tree.less";
</style>
<template>
    <div>
        <div class="container-tree">
            <Tree :data="data1" @on-select-change="test1"></Tree>
            <Card style="width: 720px; height: 420px">
                <h1>这是普通的树模板</h1>
                <h2>当前选择的节点title为:{{ data1title }}</h2>
            </Card>
        </div>
        <!-- 可选择提交数据的树 -->
        <Divider />
        <div class="container-tree">
            <Tree :data="data2" show-checkbox @on-check-change="test2"></Tree>
            <Card style="width: 720px; height: 420px">
                <h1> 这是可提交数据的树模板</h1>
                <h2>{{ data2TitleList }}</h2>
            </Card>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data1: [
                    {
                        title: "parent 1",
                        expand: true,
                        children: [
                            {
                                title: "parent 1-1",
                                expand: true,
                                children: [
                                    {
                                        title: "leaf 1-1-1",
                                    },
                                    {
                                        title: "leaf 1-1-2",
                                    },
                                ],
                            },
                            {
                                title: "parent 1-2",
                                expand: true,
                                children: [
                                    {
                                        title: "leaf 1-2-1",
                                    },
                                    {
                                        title: "leaf 1-2-1",
                                    },
                                ],
                            },
                        ],
                    },
                ],
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                data1title:"",
                data2TitleList:[]

            };

        },
        methods: {
            test1(a)
            {   
                if(a.length===0){
                    return
                }
                this.data1title = a[0].title
            },
            test2(a) {
                this.data2TitleList = []
                a.forEach(element => {
                    this.data2TitleList.push(element.title)
                });                
            }
        },
    };
</script>