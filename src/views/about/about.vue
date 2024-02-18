<script setup lang="ts">
</script>

<template>
  <h3>
    this is about
  </h3>
  <ul class="testflex">
    <li>测试flex</li>
    <li>2</li>
  </ul>
</template>

<style lang="scss" scoped>
h3{
    color: $primary-color;
}
.testflex{
  height: 50px;
  & li{
    background-color: antiquewhite;
    width: 80px;
  }
  @include flex-between;
  align-items: center;
  
}
</style>
