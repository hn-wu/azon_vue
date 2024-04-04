<template>
<el-row :gutter="20">
  <el-col :span="3.5">
    <el-button type="primary" @click="searchConfig()" style="margin-bottom: 5px;">查询ssh配置</el-button>
  </el-col>
  <el-col :span="6">
    <el-input v-model="ruleForm.hostname" type="text" placeholder="请输入hostname" style="width: 100%;" />
  </el-col>
</el-row>
<el-table :data="repdata" style="width: 100%" v-if="repdata">
    <el-table-column prop="hostname" label="Hostname"/>
    <el-table-column prop="port" label="Port"/>
    <el-table-column prop="username" label="Username" />
    <el-table-column prop="password" label="Password" />
</el-table>
</template>

<script lang="ts" setup>
import {ref,reactive } from 'vue'
import axios from '@/api/axios'

const ruleForm = reactive({
  hostname: ''
})

const repdata = ref(null);

async function searchConfig() {
  try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post('/user/config/getbyhostname', ruleForm);
    repdata.value = response.data
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>