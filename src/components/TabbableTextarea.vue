<script setup>
defineProps({
  modelValue: {
    type: String,
  }
});

let emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
  let textarea = e.target;

  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

function update(e) {
  emit('update:modelValue', e.target.value);
}

</script>

<template>
  <textarea
      @keyup="update"
      v-text="modelValue"
      @keydown.tab.prevent="onTabPress"
  ></textarea>
</template>

<style scoped>

</style>
