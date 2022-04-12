<script lang="ts" setup>
import HelloWorld from '../../components/HelloWorld.vue';
const handleSuccess = (id: number) => {
  console.log('success', id);
};
</script>
<template>
  <div>
    <h1>Home</h1>
    <HelloWorld msg="Hello Vue3" @on-success="handleSuccess" />
  </div>
</template>
