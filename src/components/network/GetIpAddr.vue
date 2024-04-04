<template>
    <el-row :gutter="20">
      <el-col :span="3">
        <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
      </el-col>
      <el-col :span="3.5">
        <el-button type="primary" @click="searchFile()" style="margin-bottom: 5px;">查询主机网络</el-button>
      </el-col>
    </el-row>
    <div>
    <el-table :data="repdata" style="width: 100%; margin-bottom: 20px;border" v-if="repdata">
        <el-table-column prop="interface_name" label="interface_name" sortable />
        <el-table-column prop="interface_ip" label="interface_ip" sortable />
        <el-table-column prop="interface_mac" label="interface_mac" sortable />
        <el-table-column prop="interface_state" label="interface_state" sortable />
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
interface InterfaceInfo {
  interface_name: string;
  interface_ip: string;
  interface_mac: string;
  interface_state: string[];
}

const repdata = ref<InterfaceInfo[] | null>(null);

async function searchFile() {
    try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post('/network/ip/addr', ruleForm);
    let data = response.data
    let interfacesArray: InterfaceInfo[] = Object.keys(response.data).map(key => {
        return {
        interface_name: data[key].interface_name,
        interface_ip: data[key].interface_ip,
        interface_mac: data[key].interface_mac,
        interface_state: data[key].interface_state
        };
    });
    console.log(interfacesArray)
    repdata.value = interfacesArray;
    } catch (error) {
    console.error('Error:', error);
    }
}
const handleUpdateValue = (value:any) => {
    ruleForm.hostname = value;
};
</script>