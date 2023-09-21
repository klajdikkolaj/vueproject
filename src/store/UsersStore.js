import { defineStore} from "pinia";
import sourceData from '@/data.json'
import {useAuthStore} from "@/store/AuthStore";
import router from "@/router";
export const useUsersStore = defineStore('UsersStore', {
    state: ()=>{

        return{
            users: sourceData.users,
            authUser:null,
        }
    },
    getters:{
        getUsers:(()=>{

        }),
        getAuthUser: (state) => {
            if (!state.authUser) {
                const authUserID = useAuthStore().authId;
                state.authUser = sourceData.users.find(user => user.id === authUserID);
            }
            return state.authUser;
        }

    },
    actions: {

        async updateUser(updatedUserData) {
            const user = await this.users.find(u => u.id === updatedUserData.id)
            if (user) {
                Object.assign(user, updatedUserData)
                try {
                    await router.push({name: 'User'});
                } catch (error) {
                    console.error("Navigation failed:", error);
                }
            }
        },
        async cancel() {
            try {
                await router.push({name: 'User'});
            } catch (error) {
                console.error("Navigation failed:", error);
            }
        }
    }

})
