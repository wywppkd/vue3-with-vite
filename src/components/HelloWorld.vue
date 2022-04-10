<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

// 自定义事件
const emit = defineEmits(['onSuccess']);

const count = ref(0);

const add = () => {
  count.value++;
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" @click="add()">count is: {{ count }}</button>
    <br />
    <button @click="emit('onSuccess')">触发自定义事件</button>
  </div>
</template>

<style scoped>
.hello {
  text-align: center;
}
button {
  color: red;
}
</style>
