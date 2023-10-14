<script setup>
import QuizFooterLink from "@/components/Quiz/QuizFooterLink.vue";
import {inject} from "vue";

let links = [{name: 'Google', url: "https://google.com"}, {name: 'YouTube', url: "https://youtube.com"}, {name: 'LinkedIn', url: "https://linkedin.com"}];

let quiz = inject('quiz');
</script>

<template>
  Quiz footer

  {{ quiz.name }}

  <div>
    <ul class="list-none">
      <QuizFooterLink v-for="(link, index) in links" :key="index" :link="link"/>
    </ul>

  </div>
</template>

<style scoped>

</style>
