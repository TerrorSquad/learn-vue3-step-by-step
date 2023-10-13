import {ref, watch} from "vue";

export function useStorage(key, defaultValue = null) {
    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        localStorage.setItem(key, JSON.stringify(value.value));
    }

    let storedValue = read();

    let value = ref(storedValue !== null ? storedValue : defaultValue);

    watch(value, () => {
        if (value.value === null) {
            localStorage.removeItem(key);
        } else {
            write();
        }
    });


    return value;
}
