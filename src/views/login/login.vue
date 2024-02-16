<template>
    <a-layout class="login">
      <a-form :model="form" @submit.prevent="handleSubmit">
        <h2>用户登录</h2>
        
        <!-- 输入用户名 -->
        <a-form-item label="用户名">
          <a-input v-model="form.username"></a-input>
        </a-form-item>
        
        <!-- 输入密码 -->
        <a-form-item label="密码">
          <a-input type="password" v-model="form.password"></a-input>
        </a-form-item>
        
        <!-- 记住我选项 -->
        <a-checkbox v-model="rememberMe">记住我</a-checkbox>
        
        <!-- 登录按钮 -->
        <a-button type="primary" htmlType="submit">登录</a-button>
      </a-form>
      
      <!-- 错误信息显示区域 -->
      <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </a-layout>
  </template>
   
  <script lang="ts">
  export default {
    data() {
      return {
        form: {
          username: '', // 用户名
          password: '' // 密码
        },
        rememberMe: false, // 是否记住我
        errorMessage: '' // 错误消息
      };
    },
    
    methods: {
      handleSubmit() {
        if (this.validateForm()) {
          // 在这里进行登录操作
          
          // 模拟登录成功后重定向到首页或其他页面
          this.$router.push('/');
        } else {
          this.errorMessage = '用户名或密码不能为空';
        }
      },
      
      validateForm() {
        const { username, password } = this.form;
        return !!username && !!password;
      }
    }
  };
  </script>
   
  <style scoped>
  .login {
    width: 300px;
    margin: auto;
  }
  </style>