<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
      </el-col>
      <el-col :span="3">
        <el-input v-model="ruleForm.addr" type="text" placeholder="请输入文件目录" style="width: 110%;" />
      </el-col>
      <el-col :span="3">
        <el-input v-model="ruleForm.filename" type="text" placeholder="模糊查询文件名" style="width: 110%;" />
      </el-col>
      <el-col :span="3.5">
        <el-button type="primary" @click="searchFile()" style="margin-bottom: 5px;">查询文件路径</el-button>
      </el-col>
    </el-row>
    <div v-if="repdata">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="i in repdata" :key="i" class="infinite-list-item">{{ i }}</li>
        </ul>
    </div>
</template>
    
<script lang="ts" setup>
import {ref,reactive } from 'vue'
import axios from '@/api/axios'
import QueryHostname from '../QueryHostname.vue';

const ruleForm = reactive({
    hostname: '',
    addr:'',
    filename:''
})

const repdata = ref(null);
const load = () => {}
async function searchFile() {
    try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post('/file/find', ruleForm);
    repdata.value = response.data
    } catch (error) {
    console.error('Error:', error);
    }
}
const handleUpdateValue = (value:any) => {
    ruleForm.hostname = value;
};
</script>

<style>
.infinite-list {
    height: 120px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 20px;
    background: var(--el-color-primary-light-9);
    margin: 2px;
    color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
    margin-top: 2px;
}
</style>