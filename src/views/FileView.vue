<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
    <div></div>
    <el-icon @click="refreshComponent"><RefreshRight /></el-icon>
    </div>
    <FindFile></FindFile>
    <div style="margin-bottom: 10px;"></div>
    <ShowFile></ShowFile>
    <div style="margin-bottom: 10px;"></div>
    <FindFileWord></FindFileWord>
  </div>
</template>

<script setup>
import FindFile from '../components/file/FindFile.vue';
import ShowFile from '../components/file/ShowFile.vue';
import FindFileWord from '../components/file/FindFileWord.vue';

function refreshComponent(){
  window.location.reload();
}
</script>
