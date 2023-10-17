import {defineStore} from "pinia";

const MAX_INCREMENTS = 10;
export let useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        }
    },
    actions: {
        increment() {
            if (this.count < MAX_INCREMENTS) {
                this.count++
            }
        }
    },
    getters: {
        remaining() {
            return MAX_INCREMENTS - this.count
        }
    }
})
