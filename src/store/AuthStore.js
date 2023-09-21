// AuthStore.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore('AuthStore', {
    state: () => {
        return {
            authId: "Miej9zSGMRZKDvMXzfxjVOyv3RF3"
        }
    },
    actions: {
        setAuthId(id) {
            this.authId = id;
        }
    }
});
