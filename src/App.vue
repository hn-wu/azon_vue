<template>
  <el-header class="header-center">
      <img src="../../public/logo.png" alt="Logo" style="height: 80%;"/>
  </el-header>
  <div class="divider"></div>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background-color: #ffffff;">
      <sidebar />
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
export default {
  name: 'App',
  components: {
    Sidebar,
  },
};
</script>

<style>
.header-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider {
    height: 1px;
    background-color: #ebeef5;
    margin-top: 0px; /* 顶部间距 */
    margin-bottom: 0px; /* 底部间距 */
}

img {
  height: 100%;
}
</style>
