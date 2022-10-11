<style lang="less">
@import "./tree.less";
</style>
<template>
    <div>
        <div class="container-tree" @click="test1">
            <Tree :data="data1"></Tree>
            <Card style="width: 720px; height: 420px">
                <h1>{{ console() }}</h1>
            </Card>
        </div>
        <!-- <Divider />
        <div class="container-tree" @click="test1">
            <Tree :data="data1"></Tree>
            <Card style="width: 720px; height: 420px">
                <h1>{{ console() }}</h1>
            </Card>
        </div> -->
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
            console: () => {
                return console;
            },
        };
    },
    methods: {
        test1() {
            console.log(window);
        },
    },
};
</script>
