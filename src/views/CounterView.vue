<script setup>
import {counter} from '@/stores/counterStore.js';
</script>

<template>
  <h1>{{ counter.count }}</h1>
  <button class="rounded-2xl py-1 px-2 text-white bg-blue-500"
          @click="counter.increment()">Increment
  </button>
</template>

<style scoped>

</style>
