<template lang="">
    <div>
        <DatePicker :value="abc.date" format="yyyy" type="year" placeholder="Select date" style="width: 200px"></DatePicker>
        <button @click="addModal">添加</button>
        <button @click="testList">测试list</button>
        <!-- <button @click="add()">确认添加</button> -->
        <Tree :data="list2" :render="renderContent" class="demo-tree-render" show-checkbox  @on-select-change="onSelectChange"></Tree>
        <Modal
            v-model="treeAddModel"
            title="Common Modal dialog box title"
            @on-ok="ok"
        >
        
        <Form :model="addForm" label-position="left" :label-width="100">
        <FormItem label="id">
            <Input v-model="addForm.id"></Input>
        </FormItem>
        <FormItem label="Title">
            <Input v-model="addForm.title"></Input>
        </FormItem>
       
    </Form>
    </Modal>
    <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
    <button @click="testflag = false">testtable</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            testflag:true,
            data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
            columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            if(this.testflag){
                                return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                            }else{
                                return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'haha'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'xixi')
                            ]);
                            }
                            
                        }
                    }
                ],
            abc:{
                date:JSON.stringify(new Date().getFullYear()),
            },
            
            listNode: {
                id: "",
                title: "",
                children: []
            },
            treeAddModel:false,

            //判读是否为子节点增加
            isChildAdd:true,

            //暂存节点信息
            tempdata:{},


            addForm: {
                id: "",
                title: "",
                expand:true,
                children: []
            },
            list2: [
                
            ],
            list: [
                {
                    id: "1001",
                    title: "a1",
                    children: [
                        {
                            id: "1002",
                            title: "a2",
                            children: [
                                {
                                    id: "1003",
                                    title: "a3",
                                    children: [

                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "2001",
                    title: "b1",
                    children: [
                        {
                            id: "2002",
                            title: "b2",
                            children: [
                                {
                                    id: "2003",
                                    title: "b3",
                                    children: [

                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]

        }
    },
    methods: {
        testList(){
            let c = this.getTreeFilter(this.list)
            console.log(c);
        },
        onSelectChange(a, b) {
            console.log(a);
            console.log(b);
        },
        addModal() {
            this.addForm = {
                id: "",
                title: "",
                expand:true,
                children: []
            }
            this.isChildAdd = false
            this.treeAddModel = true
        },
        getTreeFilter(data){
                if(data.length === 0) return data
                let a = data.map(v=>{
                    return {
                        id: v.id,
                        name: v.title,
                        childrenList:this.getTreeFilter(v.children)
                    }
                }
                )
                return a
        },
        // ccc(treedata){
        //     if(treedata)
        // },
        childrenAdd(data){
            this.tempdata = data
            this.addForm = {
                id: "",
                title: "",
                expand:true,
                children: []
            }
            this.isChildAdd = true
            this.treeAddModel = true
        },

        add(){
            console.log(1);
            this.list2.push(this.addForm)
        },

        ok(){
            this.isChildAdd?this.append(this.tempdata):this.add()
        },

        renderContent(h, { root, node, data }) {
            return h('span', {
                style: {
                    display: 'inline-block',
                    width: '100%'
                }
            }, [
                h('span', [
                    h('Icon', {
                        props: {
                            type: 'ios-paper-outline'
                        },
                        style: {
                            marginRight: '8px'
                        }
                    }),
                    h('span', data.title)
                ]),
                h('span', {
                    style: {
                        display: 'inline-block',
                        float: 'right',
                        marginRight: '32px'
                    }
                }, [
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-add'
                        }),
                        style: {
                            marginRight: '8px'
                        },
                        on: {
                            click: () => { this.childrenAdd(data) }
                        }
                    }),
                    h('Button', {
                        props: Object.assign({}, this.buttonProps, {
                            icon: 'ios-remove'
                        }),
                        on: {
                            click: () => { this.remove(root, node, data) }
                        }
                    })
                ])
            ]);
        },
        append(data) {
            const children = data.children || [];
            children.push(this.addForm);
            this.$set(data, 'children', children);
        },
        remove(root, node, data) {
            try {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            } catch (e) {
                let index = root.indexOf(node)
                console.log(index);
                this.list2.splice(index, 1)
            }


        }
    },
    computed: {

    }

}
</script>
<style>
.demo-tree-render .ivu-tree-title {
    width: 100%;
}
</style>