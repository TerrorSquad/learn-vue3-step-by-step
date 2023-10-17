<script setup>

import Modal from "@/components/Modal.vue";
import {ref} from "vue";
import {useTeamStore} from "@/stores/TeamStore.js"

let team = useTeamStore()
let showModal = ref(false);

</script>

<template>

  <button :disabled="team.isFull"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-600"
          @click="showModal = true">Add Member ({{ team.spotsLeft }} spots
    left)
  </button>
  <Teleport to="body">
    <Modal :show="showModal"
           @close="showModal = false">

      <p class="text-lg">Need to a add a new member?</p>
      <form action=""
            class="mt-2">
        <div class="flex gap-2">
          <input class="flex-grow"
                 placeholder="Email Address..."
                 type="email">
          <button class="bg-white text-black"
                  type="submit">Add
          </button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<style scoped>

</style>
