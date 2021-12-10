<template>
    <div class="flex justify-center items-center py-20 flex-col z-0">
        <h1 class="text-black font-bold text-l p-10">Theme Select <span class="text-xs">(WIP)</span></h1>
        <div class="flex flex-wrap justify-between w-2/3">
            <img @click="selectTheme('pokeball')" class="p-3" src="../assets/themeIcons/pokeball.png" alt="">
            <img @click="selectTheme('superball')" class="p-3" src="../assets/themeIcons/superball.png" alt="">
            <img @click="selectTheme('hyperball')" class="p-3" src="../assets/themeIcons/hyperball.png" alt="">
            <img @click="selectTheme('rapideball')" class="p-3" src="../assets/themeIcons/rapideball.png" alt="">
            <img @click="selectTheme('diveball')" class="p-3" src="../assets/themeIcons/diveball.png" alt="">
            <img @click="selectTheme('luxeball')" class="p-3" src="../assets/themeIcons/luxeball.png" alt="">
            <img @click="selectTheme('heavyball')" class="p-3" src="../assets/themeIcons/heavyball.png" alt="">
            <img @click="selectTheme('dreamball')" class="p-3" src="../assets/themeIcons/dreamball.png" alt="">
            <img @click="selectTheme('masterball')" class="p-3" src="../assets/themeIcons/masterball.png" alt="">
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { getFirestore, updateDoc, setDoc, doc, getDocs, collection, query, where, orderBy} from 'firebase/firestore'
   
   export default {
        setup() {
            const auth = getAuth()
            const uid = ref()
            const db = getFirestore()

            auth.onAuthStateChanged(function(user) {
                if (user) {
                    uid.value = user.uid

                               
                }
            })

            const selectTheme = (theme) => {
                console.log("Theme Selected : ", theme)
                updateDoc(doc(db, "users", uid.value), {
                    themePreferencies: theme
                })
            }

            return { selectTheme }
        }
    }
</script>

<style>

</style>