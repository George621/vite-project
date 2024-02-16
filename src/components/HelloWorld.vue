<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div class="sc">sss </div>
</template>

<style lang="scss" scoped>
  @import "@/assets/scss/globalVar.scss";
  .sc {
    color: $color;
  }
</style>
