<style lang="less">
@import "./watchList.less";
</style>
<template>
    <div>
        <Tabs :animated="false">
            <Row>
                    <Col span="4">
                    <Input  placeholder="Enter something..." style="width: 200px" />
                    </Col>
                    <Col span="4">
                    <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                    </Col>
                    <Col span="2">
                    <Button type="primary" loading>搜索</Button>
                    </Col>
                    <Col span="2">
                    <Button type="primary" loading>导出</Button>
                    </Col>
                    <Col span="2">
                    <Button type="primary" loading>提交</Button>
                    </Col>
                    <Col span="2">
                    <Button type="primary" loading>发起监察</Button>
                    </Col>
                </Row>
            <TabPane :label="'全部' ">
                
                
                    <Table border :columns="columns" :data="data" sortable="custom" ref="table"></Table>
               

                <!-- 数据加载属性 -->
                <!-- :loading="loading" -->
                <!-- 触发事件 -->
                <!-- @on-sort-change="changeSort" @on-selection-change="showSelect" -->
            </TabPane>
            <TabPane :label="'未监察'">
                <Table border :columns="columns" :data="data" sortable="custom" ref="table"></Table>

            </TabPane>
            <TabPane :label="'合格'">
                <Table border :columns="columns" :data="data" sortable="custom" ref="table"></Table>

            </TabPane>
            <TabPane :label="'不合格'">
                <Table border :columns="columns" :data="data" sortable="custom" ref="table"></Table>

            </TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
            <template slot="extra">
                <button @click="handleTabsReduce">(extra插槽附加操作)减少</button>
            </template>
        </Tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: 2,
            columns: [
                // 表头
                {
                    type: "selection",
                    width: 60,
                    align: "center"
                },
                {
                    type: "index",
                    width: 60,
                    align: "center"
                },
                {
                    title: "名称",
                    key: "name",
                    sortable: true
                },
                {
                    title: "手机",
                    key: "mobile",
                    sortable: true
                },
                {
                    title: "创建时间",
                    key: "createTime",
                    sortable: true,
                    width: 100,
                    sortType: "desc"
                }
                ,
                {
                    title: "更新时间",
                    key: "updateTime",
                    width: 400,
                    sortable: true
                },
                {
                    title: "操作",
                    key: "action",
                    align: "center",
                    render: (h, params) => {
                        return h("div", [
                            h(
                                "Button",
                                {
                                    props: {
                                        type: "primary",
                                        size: "small",
                                        icon: "ios-create-outline"
                                    },
                                    style: {
                                        marginRight: "5px"
                                    },
                                    on: {
                                        click: () => {
                                            this.$Message.info("点击了编辑");
                                        }
                                    }
                                },
                                "编辑"
                            ),
                            h(
                                "Button",
                                {
                                    props: {
                                        type: "error",
                                        size: "small",
                                        icon: "md-trash"
                                    },
                                    on: {
                                        click: () => {
                                            this.$Message.info("点击了删除");
                                        }
                                    }
                                },
                                "删除"
                            )
                        ]);
                    }
                }
            ],
            data: [
                {
                    id: "1",
                    name: "X-BOOT",
                    mobile: "12345678901",
                    createTime: "2018-08-08 00:08:00",
                    updateTime: "2018-08-08 00:08:00"
                },
                {
                    id: "2",
                    name: "Exrick",
                    mobile: "12345678901",
                    createTime: "2018-08-08 00:08:00",
                    updateTime: "2018-08-08 00:08:00"
                }
            ]
        }
    },
    methods: {
        handleTabsAdd() {
            this.tabs++;
        },
        handleTabsReduce() {
            this.tabs--;
        }
    }
}
</script>