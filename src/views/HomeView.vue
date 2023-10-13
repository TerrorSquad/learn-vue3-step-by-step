<script setup>

import {useFlash} from "@/composables/useFlash.js";

const {flash} = useFlash();
</script>

<template>
  <main>
    <p>
      <button @click="flash('Awesome', 'It works from Home!')">Click me</button>
    </p>
  </main>
</template>
