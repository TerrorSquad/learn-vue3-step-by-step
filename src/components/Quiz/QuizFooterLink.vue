<script setup>
defineProps({
  link: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <li>
    <a :href="link.url" class="text-green-500 ">{{ link.name }}</a>
  </li>
</template>

<style scoped>

</style>
