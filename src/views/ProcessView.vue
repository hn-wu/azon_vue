<template>
  <div>
    <h2>进程页面</h2>
    <!-- 用户页面内容 -->
  </div>
</template>

<script>
export default {
  name: 'ProcessView',
  beforeRouteEnter(to, from, next) {
    // 在路由进入之前执行的代码
    console.log('即将进入用户页面');
    next(); // 必须调用next()以解析导航
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    console.log('用户页面路由发生变化');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    console.log('离开用户页面');
    next();
  }
};
</script>
