<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import {useTeamStore} from "@/stores/TeamStore.js"

let team = useTeamStore()
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
    <tr>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">Status</th>
    </tr>
    </thead>

    <tbody>
    <TeamMember v-for="(member, index) in team.members"
                :key="index"
                :email="member.email"
                :name="member.name"
                :status="member.status"/>

    </tbody>
  </table>
  <p v-show="team.isFull"
     class="text-right text-gray-600 italic">There are no remaining team spots. Upgrade to add more.</p>

</template>

<style scoped>

</style>
