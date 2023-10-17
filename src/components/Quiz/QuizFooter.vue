<script setup>
import QuizFooterLink from "@/components/Quiz/QuizFooterLink.vue";
import {state as quiz} from "@/stores/quizState.js";

let links = [{name: 'Google', url: "https://google.com"}, {name: 'YouTube', url: "https://youtube.com"}, {name: 'LinkedIn', url: "https://linkedin.com"}];


</script>

<template>
  Quiz footer

  <h5> {{ quiz.name }}</h5>

  <button class="bg-blue-500 rounded-2xl py-1 px-2"
          @click="quiz.name = 'new quiz'">Change quiz name
  </button>

  <div>
    <ul class="list-none">
      <QuizFooterLink v-for="(link, index) in links"
                      :key="index"
                      :link="link"/>
    </ul>

  </div>
</template>

<style scoped>

</style>
