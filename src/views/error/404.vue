<template>
    <div class="page-container">
      <div>
        <h1>404</h1>
        <h1>OOPS！你好像走丢了...</h1>
        <RouterLink :to="{ path: '/', replace: true }" class="ant-btn ant-btn-primary"
          >回到首页</RouterLink
        >
      </div>
      <img src="@/assets/404.gif" alt="404" />
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
      name: 'NotFound',
    });
  </script>
  
  <style lang="scss" scoped>
    .page-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: white;
    }
  </style>
  