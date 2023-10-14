<script setup>
import QuizMain from '@/components/Quiz/QuizMain.vue';
import {state} from '@/stores/quizState.js';
import {provide} from 'vue';

provide('quiz', state);

</script>

<template>
  <main>
    <QuizMain/>
  </main>
</template>
