<template>
    <div class="p-5 w-full bg-primary">
        <div v-for="(hunt, i) in hunts" class=" p-3 z-0 flex justify-center">
            <div class="bg-primary my-2 text-text_secondary w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <router-link :to="{ name: 'Hunt', params: { id: hunt.id } }">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-between w-full space-x-4">
                            <div class="flex flex-row items-center">
                                <div class="rounded-full w-4 h-4" :class="hunt.status"></div>
                                <div class="text-lg font-bold mx-5">{{hunt.pokemonName.charAt(0).toUpperCase()+hunt.pokemonName.slice(1).replace('-', ' ')}} <span class="italic font-light"> - {{hunt.game.charAt(0).toUpperCase()+hunt.game.slice(1).replace('-', ' ')}}</span></div>
                            </div>
                            <div>
                                <!-- <div>{{hunt.game.version.name.charAt(0).toUpperCase()+hunt.game.version.name.slice(1).replace('-', ' ')}}</div> -->
                                <img v-if="hunt.chroma" class=" h-8 w-8 z-0" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center mt-4 text-text_black font-bold h-24 justify-between mx-10">
                        <div>
                            <img class="w-20 h-20 rounded-full z-0" :src="hunt.sprite" alt="">
                        </div>
                        <div>
                            <p class="text-text_secondary font-bold text-3xl">{{hunt.counter}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { getFirestore , doc, getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { onMounted, ref, reactive } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


export default {
    setup() {
        const uid = ref('')
        const hunts = ref([])
        onMounted(() => {
            const isLoggedIn = ref(false)
            const auth = getAuth()
            // runs after firebase is initialized
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    isLoggedIn.value = true // if we have a user
                    uid.value = user.uid
                    const db = getFirestore();
                    const HuntRef = collection(db, 'hunts')
                    const q = query(HuntRef, orderBy('status', "desc") ,where('user','==', uid.value ))
    
                    getDocs(q)
                        .then((response) => {
                                hunts.value = response.docs.map((doc, id) => {
                                    return doc.data();
                                })
                        })
                } else {
                    isLoggedIn.value = false // if we do not
                }        
               
            })
        
        })
            
           return { hunts }
    }
}
</script>

<style>
.ended {
   border: 3px solid  #68d391
}

.running {
   border: 3px solid #90cdf4;
}

.hold {
   border: 3px solid #fbd38d;;
}


</style>