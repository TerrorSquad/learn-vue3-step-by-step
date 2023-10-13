<script setup>

import {useFlash} from "@/composables/useFlash.js";

const {flash} = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It works on the About page!', 'info')">Click me</button>
    </p>
  </div>
</template>
