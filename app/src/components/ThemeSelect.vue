<template>
    <div class="flex items-center pt-20 flex-col z-0">
        <h1 class="text-text_secondary font-bold text-l p-10">Theme Select <span class="text-xs">(WIP)</span></h1>
        <div class="flex flex-wrap justify-between w-2/3">
            <img @click="selectTheme('theme-pokeball')" class="p-3 cursor-pointer" src="../assets/themeIcons/pokeball.png" alt="">
            <img @click="selectTheme('theme-superball')" class="p-3 cursor-pointer" src="../assets/themeIcons/superball.png" alt="">
            <img @click="selectTheme('theme-hyperball')" class="p-3 cursor-pointer" src="../assets/themeIcons/hyperball.png" alt="">
            <!-- <img @click="selectTheme('theme-rapideball')" class="p-3 cursor-pointer" src="../assets/themeIcons/rapideball.png" alt="">
            <img @click="selectTheme('theme-diveball')" class="p-3 cursor-pointer" src="../assets/themeIcons/diveball.png" alt="">
            <img @click="selectTheme('theme-luxeball')" class="p-3 cursor-pointer" src="../assets/themeIcons/luxeball.png" alt="">
            <img @click="selectTheme('theme-heavyball')" class="p-3 cursor-pointer" src="../assets/themeIcons/heavyball.png" alt="">
            <img @click="selectTheme('theme-dreamball')" class="p-3 cursor-pointer" src="../assets/themeIcons/dreamball.png" alt="">
            <img @click="selectTheme('theme-masterball')" class="p-3 cursor-pointer" src="../assets/themeIcons/masterball.png" alt=""> -->
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
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
                let themes = ['theme-pokeball', 'theme-superball', 'theme-hyperball',]
                document.getElementById('app').classList.remove(...themes)
                document.getElementById('app').classList.add(theme)
            }

            return { selectTheme }
        }
    }
</script>

<style>

</style>