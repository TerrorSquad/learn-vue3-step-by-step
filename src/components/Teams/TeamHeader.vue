<script setup>
import {useTeamStore} from "@/stores/TeamStore.js"

let team = useTeamStore()
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button :disabled="team.isFull"
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-600">Add Member ({{ team.spotsLeft }} spots
        left)
      </button>
    </div>
    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <img alt=""
             class="mr-2"
             src="/smiley.png">
        {{ team.name }} Team
        <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
          {{ team.members.length }}
        </div>
      </h3>
    </div>
  </header>
</template>
