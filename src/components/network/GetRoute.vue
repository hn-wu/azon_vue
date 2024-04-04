<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
      </el-col>
      <el-col :span="3.5">
        <el-button type="primary" @click="searchFile()" style="margin-bottom: 5px;">查询主机路由</el-button>
      </el-col>
    </el-row>
    <div>
    <el-table :data="repdata" style="width: 100%; margin-bottom: 20px;border" v-if="repdata">
        <el-table-column prop="default" label="default" sortable />
        <el-table-column prop="ip" label="ip" sortable />
        <el-table-column prop="src" label="src" sortable />
        <el-table-column prop="dev" label="dev" sortable />
    </el-table>
    </div>
</template>
    
<script lang="ts" setup>
import {ref,reactive } from 'vue'
import axios from '../../api/axios'
import QueryHostname from '../QueryHostname.vue';

const ruleForm = reactive({
    hostname: '',
})
const repdata = ref(null);

async function searchFile() {
    try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post('/network/ip/route', ruleForm);
    let data = response.data
    repdata.value = data;
    } catch (error) {
    console.error('Error:', error);
    }
}
const handleUpdateValue = (value:any) => {
    ruleForm.hostname = value;
};
</script>