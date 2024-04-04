<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
      </el-col>
      <el-col :span="3">
        <el-input v-model="ruleForm.addr" type="text" placeholder="文件路径" style="width: 100%;" />
      </el-col>
      <el-col :span="3">
        <el-input v-model="ruleForm.word" type="text" placeholder="查询单词" style="width: 100%;" />
      </el-col>
      <el-col :span="3.5">
        <el-button type="primary" @click="searchConfig()" style="margin-bottom: 5px;">查询文件出现单词数</el-button>
      </el-col>
    </el-row>
    <div v-if="repdata">单词出现次数：{{ repdata }}</div>
    </template>
    
  <script lang="ts" setup>
  import {ref,reactive } from 'vue'
  import axios from '@/api/axios'
  import QueryHostname from '../QueryHostname.vue';
  
  const ruleForm = reactive({
    hostname: '',
    addr: '',
    word: ''
  })
  const handleUpdateValue = (value:any) => {
  ruleForm.hostname = value;
  };
  const repdata = ref(null);
  
  async function searchConfig() {
    try {
      console.log('Form data submitted:', ruleForm);
      const response = await axios.post('/file/count/word', ruleForm);
      repdata.value = response.data.count
    } catch (error) {
      console.error('Error:', error);
    }
  }
  </script>