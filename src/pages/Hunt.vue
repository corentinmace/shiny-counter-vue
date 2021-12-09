<template>
    <div class="flex justify-center items-center py-10 flex-col z-0">
        <div class="m-5 w-full">
            <div class="m-3 z-0 flex justify-center">
                <div class="bg-gray-500 my-2 text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-between w-full space-x-4">
                            <div class="flex flex-row items-center">
                                <div class="rounded-full w-4 h-4" :class="status"></div>
                                <div class="text-lg text-white font-bold mx-5">{{pokemonName.charAt(0).toUpperCase()+pokemonName.slice(1).replace('-', ' ')}}</div>
                                <div>
                                    <img v-if="chroma" class=" h-8 w-8 z-0" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-4 text-gray-500 font-bold h-24 justify-between mx-10">
                        <div>
                            <img class="w-20 h-20 rounded-full z-0" :src="sprite" alt="">
                        </div>
                        <div>
                            <p class="text-white font-bold text-3xl">{{counter}}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-evenly">
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>

<script>
import { getFirestore , doc, getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { onMounted, ref, reactive, watch } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRoute } from 'vue-router'


export default {
    setup() {

        let hunts = []
        const sprite = ref('')
        const chroma = ref(false)
        const game = ref('')
        const pokemonName = ref('')
        const status = ref('')
        const counter = ref(0)



        const route = useRoute()
        onMounted(() => {
            const isLoggedIn = ref(false)
            const auth = getAuth()
            // runs after firebase is initialized
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    isLoggedIn.value = true // if we have a user
                    const db = getFirestore();
                    const HuntRef = collection(db, 'hunts')
                    const q = query(HuntRef,where('id','==', route.params.id ))
    
                    getDocs(q)
                        .then((response) => {
                                hunts = response.docs.map((doc, id) => {
                                    return doc.data();
                                })
                    console.log(hunts[0])
                    sprite.value = hunts[0].sprite
                    chroma.value = hunts[0].chroma
                    game.value = hunts[0].game
                    pokemonName.value = hunts[0].pokemonName
                    status.value = hunts[0].status
                    counter.value = hunts[0].counter
                        })
                } else {
                    isLoggedIn.value = false // if we do not
                }                  
            })  
        })

   
           return { sprite, chroma, game, pokemonName, status, counter}
            
    }
}

</script>