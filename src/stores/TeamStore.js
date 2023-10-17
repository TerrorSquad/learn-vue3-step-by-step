import {defineStore} from "pinia";

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: 'Smiley',
        spots: 0,
        members: []
    })
    ,
    actions: {
        async fill() {
            let response = await import('@/team.json')
            this.$state = response.default
        }
    },
    getters: {
        spotsLeft() {
            return this.spots - this.members.length
        },
        isFull() {
            return this.spotsLeft === 0
        }
    }
})
