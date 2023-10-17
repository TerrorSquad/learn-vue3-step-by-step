<script setup>
import {useCounterStore} from '@/stores/CounterStore.js';

let counter = useCounterStore();
</script>

<template>
  <h1>{{ counter.count }}</h1>
  <button :disabled="!counter.remaining"
          class="rounded-2xl py-1 px-2 text-white bg-blue-500 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          @click="counter.increment()">Increment ({{ counter.remaining }} remaining)
  </button>
</template>

<style scoped>

</style>
