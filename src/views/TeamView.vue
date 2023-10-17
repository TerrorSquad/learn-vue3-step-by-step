<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore.js"

let team = useTeamStore()
team.fill()
</script>

<template>
  <TeamHeader/>
  <div>
    <TeamMembers/>
  </div>
  <TeamFooter/>
</template>

<style scoped>

</style>
