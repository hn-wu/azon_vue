<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
    <div></div>
    <el-icon @click="refreshComponent"><RefreshRight /></el-icon>
    </div>
    <GetIpAddr></GetIpAddr>
    <div style="margin-bottom: 10px;"></div>
    <GetRoute></GetRoute>
    <div style="margin-bottom: 10px;"></div>
    <GetNetstatPort></GetNetstatPort>
  </div>
</template>

<script setup>
import GetIpAddr from '../components/network/GetIpAddr.vue';
import GetRoute from '../components/network/GetRoute.vue';
import GetNetstatPort from '../components/network/GetNetstatPort.vue';
function refreshComponent(){
  window.location.reload();
}
</script>
