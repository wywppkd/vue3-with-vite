<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

const handleSuccess = () => {
  console.log('success');
};
</script>

<template>
  <HelloWorld msg="Hello Vue3" @on-success="handleSuccess" />
</template>
