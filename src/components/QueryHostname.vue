<template>
  <el-autocomplete
    v-model="hostname"
    :fetch-suggestions="querySearchAsync"
    placeholder="输入主机ip"
    @focus="loadAll"
    @select="handleSelect"
  />
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue'
import axios from '@/api/axios'

const hostname = ref('');

interface Host {
value: string
hostname: string
password: string
port: string
username: string
}

const hosts = ref<Host[]>([])

const loadAll = async () => {
try {
  console.log("发起请求")
  const response = await axios.post('/user/config/all');
  hosts.value = response.data.map((item: any) => ({...item,value: item.hostname })) as Host[]
} catch (error) {
  console.error('加载数据失败:', error);
}
};

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString ? hosts.value.filter(createFilter(queryString)) : hosts.value
  console.log("results：" + JSON.stringify(results))
  cb(results);
}
const createFilter = (queryString: string) => {
  return (restaurant: Host) => {
    return (
      restaurant.hostname.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const emit = defineEmits(['updateValue']);
const handleSelect = (item: Record<string, any>) => {
  console.log("给父组件：" + JSON.stringify(hostname.value))
  emit('updateValue', hostname.value);
}

</script>
