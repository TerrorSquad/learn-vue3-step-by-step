<script setup>

import team from "@/team.json"
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
</script>

<template>
  <TeamHeader :team="team"/>

  <div>
    <TeamMembers :team="team"/>
  </div>

  <TeamFooter :team="team"/>

</template>

<style scoped>

</style>
