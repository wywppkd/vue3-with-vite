<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

const add = () => {
  count.value++;
};
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" @click="add()">count is: {{ count }}</button>
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
