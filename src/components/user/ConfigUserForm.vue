<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 200px"
    :model="ruleForm"
    status-icon
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="Hostname">
      <el-input v-model="ruleForm.hostname" type="text" />
    </el-form-item>
    <el-form-item label="Port">
      <el-input v-model="ruleForm.port" type="text" />
    </el-form-item>
    <el-form-item label="Username">
      <el-input v-model="ruleForm.username" type="text" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="ruleForm.password" type="text" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>

import {ref,reactive } from 'vue'
import type { FormInstance} from 'element-plus'
import axios from '@/api/axios'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  hostname: '',
  port: '',
  username: '',
  password: '',
})

const data = ref(null)

async function submitForm() {
  try {
    console.log('Form data submitted:', ruleForm);
    const response = await axios.post('/user/config/set', ruleForm);
    data.value = response.data
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>
