<template>
    <div class="flex pb-20 items-center flex-col z-0">
        <h1 class="text-text_secondary font-bold text-l p-10">Update User Infos</h1>
        <label class="block text-text_secondary text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input id="username" type="text" class="px-2 w-2/3 text-text_black block mt-1 rounded-md red-300 shadow-sm focus:indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" v-model="username">
        <button class="bg-secondary text-text_primary font-bold my-5 px-6 rounded-full focus:outline-none focus:shadow-outline" type="submit" @click="updateUserInfos">Update</button>
    </div>
    <transition name="fade">
        <div class="fixed w-screen bottom-20 text-center py-4 lg:px-4" v-if="updateOk">
            <div class="p-2 bg-secondary items-center text-text_primary leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-tertiary uppercase px-2 py-1 text-xs font-bold mr-3">Alert</span>
                <span class="font-semibold mr-2 text-center flex-auto">Profile updated !</span>
            </div>
        </div>
    </transition>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { getFirestore, updateDoc, doc, writeBatch, where, collection} from 'firebase/firestore'

    export default {
        setup() {
            const auth = getAuth()
            const uid = ref()
            const db = getFirestore()
            const batch = writeBatch(db);
            const username = ref()
            const updateOk = ref(false)

            onMounted(() => {
                auth.onAuthStateChanged(function(user) {
                    if(user) {
                        uid.value = user.uid
                        username.value = user.displayName
                    }
                })
            })
            
            const updateUserInfos = () => {
                auth.onAuthStateChanged(function(user) {
                    if (user) {
                        updateProfile(user, {
                            displayName: username.value
                        })
                        updateDoc(doc(db, "users", uid.value), {
                            displayName: username.value
                        })
                    }
                 })
                 updateOk.value = true
                setTimeout(() => {
                    updateOk.value = false
                }, 1000);
            }

            return { username, updateUserInfos, updateOk }

        }
    }
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>