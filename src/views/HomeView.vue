<script setup>
import TheWelcome from '@/components/TheWelcome.vue';
import { ref } from 'vue';

let message = ref('Hello Vue 3!');

setTimeout(() => {
  message.value = 'Hello Vue 3 from setTimeout!';
}, 2000);
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
  </main>
</template>
