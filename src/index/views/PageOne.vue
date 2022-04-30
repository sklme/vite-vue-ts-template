<template>
  <h2>这是第一个页面</h2>
  <p>使用的是sfc编写</p>
  <div>
    <p>第{{ x }}次点击</p>
    <button @click="clickX">点击我</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const x = ref(0);
function clickX() {
  x.value++;
}
</script>
