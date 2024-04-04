<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
    <el-button type="primary" @click="toggleForm">新增ssh配置</el-button>
    <el-icon @click="refreshComponent"><RefreshRight /></el-icon>
    </div>
    <ConfigUserForm v-if="isFormVisible"></ConfigUserForm>
    <SearchUserConfig></SearchUserConfig>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ConfigUserForm from '../components/user/ConfigUserForm.vue';
import SearchUserConfig from '../components/user/SearchConfigUser.vue';

const isFormVisible = ref(false)

function toggleForm() {
  isFormVisible.value = !isFormVisible.value
}

function refreshComponent(){
  window.location.reload();
}
</script>