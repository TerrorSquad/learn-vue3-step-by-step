<script setup>

import {useStorage} from "@/composables/useStorage.js";

let food = useStorage('food', 'salad');
let age = useStorage('age', 0);
</script>

<template>
  <main>
    <p>
      What is your favorite food?<input v-model="food" type="text"/>
      What is your age? <input v-model="age" type="text"/>
    </p>
  </main>
</template>
