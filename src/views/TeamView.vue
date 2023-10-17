<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore.js"
import Modal from "@/components/Modal.vue";
import {ref} from "vue";

let team = useTeamStore()
team.fill()

let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal = true"/>

  <div>
    <TeamMembers/>
  </div>

  <TeamFooter/>

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
</template>

<style scoped>

</style>
