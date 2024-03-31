<template>
  <el-header>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefefe;
}
.el-header {
    background-color: #ffffff;
    line-height: 50px;
    padding: 0 20px;
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
