<script lang="ts" setup>
import HelloWorld from '../../components/HelloWorld.vue';
const handleSuccess = () => {
  console.log('success');
};
</script>
<template>
  <div>
    <h1>Home</h1>
    <HelloWorld msg="Hello Vue3" @on-success="handleSuccess" />
  </div>
</template>
