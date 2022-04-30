<template>
  <h2>这是第一个页面</h2>
  <p>使用的是sfc编写</p>
  <div>
    <p>第{{ x }}次点击</p>
    <button @click="clickX">点击我</button>
  </div>
  <div>
    从vuex渲染
    <div>{{ testText }}</div>
    <button @click="modifyTest">trigger commit</button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
const store = useStore();

const x = ref(0);
function clickX() {
  x.value++;
}

const testText = computed(() => store.state.test);
const modifyTest = () => store.commit('modifyTest');
</script>
