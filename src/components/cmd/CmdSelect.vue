<template>
    <div class="flex flex-wrap gap-4 items-center">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
            <el-select v-model="value" placeholder="选择不同命令执行方式" size="large" style="width: 200px;margin-bottom: 5px;" >
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                />
            </el-select>
            <el-icon @click="refreshComponent"><RefreshRight /></el-icon>
        </div>
      <!-- 根据选定的值显示不同的输入框 -->
    <el-col v-if="value === '命令执行'" :span="6">
        <el-input placeholder="输入想要执行的命令" style="width: 100%;margin-bottom: 5px;" type="text" v-model="ruleForm.cmd"></el-input>
    </el-col>
    <el-col v-if="value === '容器内执行'" :span="6">
        <el-input placeholder="输入容器名或容器id" style="width: 100%;margin-bottom: 5px;" type="text" v-model="ruleForm.container"></el-input>
        <el-input placeholder="输入想要执行的命令" style="width: 100%;margin-bottom: 5px;" type="text" v-model="ruleForm.cmd"></el-input>
    </el-col>
    <el-col v-if="value === '循环执行命令'" :span="6">
        <el-input placeholder="输入想要执行的命令次数" style="width: 100%;margin-bottom: 5px;" type="text" v-model="ruleForm.count"></el-input>
        <el-input placeholder="输入想要执行的命令" style="width: 100%;margin-bottom: 5px;" type="text" v-model="ruleForm.cmd"></el-input>
    </el-col>
    <!-- 可以继续添加更多的条件和输入框 -->
    <div>
        <el-row :gutter="20">
        <el-col :span="3.5">
          <QueryHostname @updateValue="handleUpdateValue"></QueryHostname>
            <!-- <el-input placeholder="输入主机ip" style="width: 100px;" type="text" v-model="ruleForm.hostname"></el-input> -->
        </el-col>
        <el-col :span="4">
            <el-button type="primary" @click="execute()">执行命令</el-button>
        </el-col>
        </el-row>
    </div>
    <div class="code-container" v-if="repdata">
    <pre><code>{{ repdata }}</code></pre>
  </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {ref,reactive,watchEffect } from 'vue'
  import axios from '@/api/axios'
  import QueryHostname from '../QueryHostname.vue';
  
  const value = ref('')
  
  const options = [
    {
      value: '命令执行',
      label: '命令执行',
    },
    {
      value: '容器内执行',
      label: '容器内执行',
    },
    {
      value: '循环执行命令',
      label: '循环执行命令',
    },
  ]

  const ruleForm = reactive({
    hostname:'',
    cmd: '',
    container:'',
    count:''
    })

const handleUpdateValue = (value:any) => {
  ruleForm.hostname = value;
};

let url = '';

watchEffect(() => {
  if (value.value === '循环执行命令') {
    url = '/ssh/cmd/while';
  } else if (value.value === '容器内执行') {
    url = '/ssh/cmdContainer';
  } else {
    url = '/ssh/cmd';
  }
  console.log(url);
});

const repdata = ref<string | null>(null);

async function execute() {
  try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post(url, ruleForm);
    repdata.value = response.data
  } catch (error) {
    if (error instanceof Error) {
      // 现在 TypeScript 知道 error 是一个 Error 对象
      console.error('Error:', error);
      repdata.value = error.message;
    } else {
      // 处理 error 不是 Error 实例的情况
      console.error('An unexpected error occurred:', error);
      repdata.value = '发生了未知错误。';
    }
  }
}

function refreshComponent(){
  window.location.reload();
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