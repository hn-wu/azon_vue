<template>
    <!-- 左侧导航栏 -->
    <el-menu
    :default-active="this.$router.path"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    router>
        <el-menu-item index="1" @click="goTo('user')">用户</el-menu-item>
        <el-menu-item index="2" @click="goTo('cmd')">cmd执行</el-menu-item>
        <el-menu-item index="3" @click="goTo('network')">网络</el-menu-item>
        <el-menu-item index="4" @click="goTo('file')">文件</el-menu-item>
        <el-menu-item index="5" @click="goTo('process')">进程</el-menu-item>
    </el-menu>
</template>
  
<script>
export default {
    name: 'Sidebar',
    methods: {
        goTo(route) {
            this.$router.push({name:route});
        },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo {
    border-right: 0;
}
</style>
  