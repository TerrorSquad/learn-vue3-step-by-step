<script setup>
import {state as quiz} from "@/stores/quizState.js";
</script>

<template>
  <h2>
    The quiz name: {{ quiz.name }}
  </h2>
  <p>
    Welcome to your first quiz. How do you think you'll do?
  </p>
</template>

<style scoped>

</style>
