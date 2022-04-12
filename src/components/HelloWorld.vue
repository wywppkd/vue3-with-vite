<script setup lang="ts">
import { ref } from 'vue';
type Props = {
  msg: string;
};

defineProps<Props>();

// 自定义事件
const emit = defineEmits<{
  (e: 'onSuccess', id: number): void;
}>();

const count = ref<number>(0);

const add = () => {
  count.value++;
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" @click="add()">count is: {{ count }}</button>
    <br />
    <button @click="emit('onSuccess', 111)">触发自定义事件</button>
  </div>
</template>

<style scoped lang="scss">
.hello {
  text-align: center;
}
button {
  color: red;
}
</style>
