<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
      </el-col>
      <el-col :span="3">
        <el-input v-model="ruleForm.addr" type="text" placeholder="文件路径" style="width: 100%;" />
      </el-col>
      <el-col :span="3.5">
        <el-button type="primary" @click="searchConfig()" style="margin-bottom: 5px;">查询文件</el-button>
      </el-col>
    </el-row>
    <div class="code-container" v-if="repdata">
        <pre><code>{{ repdata }}</code></pre>
    </div>
    </template>
    
  <script lang="ts" setup>
  import {ref,reactive } from 'vue'
  import axios from '@/api/axios'
  import QueryHostname from '../QueryHostname.vue';
  
  const ruleForm = reactive({
    hostname: '',
    addr: ''
  })
  const handleUpdateValue = (value:any) => {
  ruleForm.hostname = value;
  };

  const repdata = ref(null);
  
  async function searchConfig() {
    try {
      console.log('Form data submitted:', ruleForm);
      const response = await axios.post('/file/show', ruleForm);
      repdata.value = response.data
    } catch (error) {
      console.error('Error:', error);
    }
  }
  </script>

<style scoped>
.code-container {
  border: 1px solid #eaecef; /* 边框颜色 */
  border-radius: 4px; /* 边框圆角 */
  padding: 10px; /* 内边距 */
  margin: 10px 0; /* 外边距 */
  background-color: #f6f8fa; /* 背景颜色 */
  overflow: auto; /* 超出部分显示滚动条 */
  max-height: 300px; /* 最大高度，超出这个高度将显示滚动条 */
  font-family: monospace; /* 使用等宽字体 */
  font-size: 0.9em; /* 字体大小 */
}
code {
  white-space: pre-wrap; /* 保持空白符并允许自动换行 */
}
</style>