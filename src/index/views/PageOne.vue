<template>
  <h2>这是第一个页面</h2>
  <p>使用的是sfc编写</p>
  <div>
    <p>第{{ x }}次点击</p>
    <button @click="clickX">点击我</button>
  </div>
  <div class="vuex">
    从vuex渲染
    <div>{{ testText }}</div>
    <button @click="modifyTest">trigger commit</button>
    <div>{{ test123 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';
const store = useStore();

const x = ref(0);
function clickX() {
  x.value++;
}

const testText = computed(() => `xxxx ${store.state.test} xxxx`);
const modifyTest = () => store.commit('modifyTest');
</script>

<script lang="ts">
import _store from '@/store/index';

export default defineComponent({
  computed: {
    test123() {
      return `123${_store.state.test}123`;
    },
  },
});
</script>

<style lang="less" scoped>
.vuex {
  background-color: #ddd;
}
</style>
