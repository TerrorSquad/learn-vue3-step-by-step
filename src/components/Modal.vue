<script setup>
defineProps({
  show: Boolean,
})
</script>

<template>
  <div v-if="show"
       class="modal-mask">
    <div class="modal-container">
      <div class="mb-2">
        <slot>default body</slot>
      </div>

      <footer class="border-t border-blue-100 pt-2">
        <slot name="footer">
          <button class="rounded-xl bg-blue-500 hover:bg-blue-600 py-1 px-2 text-white"
                  @click="$emit('close')">Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
</style>
