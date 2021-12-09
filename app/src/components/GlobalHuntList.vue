<template>
    <div class="m-5 w-full">
        <div v-for="(hunt, id) in hunts" class=" m-3 z-0 flex justify-center">
          
            <div class="bg-gray-500 my-2 text-black w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
                <div class="flex items-center justify-between">
                <div class="flex items-center justify-between w-full space-x-4">
                    <div class="flex flex-row items-center">
                        <div class="rounded-full w-4 h-4" :class="hunt.status"></div>
                        <div class="text-lg text-white font-bold mx-5">{{hunt.pokemonName.charAt(0).toUpperCase()+hunt.pokemonName.slice(1).replace('-', ' ')}}</div>
                    </div>
                    <div>
                        <!-- <div>{{hunt.game.version.name.charAt(0).toUpperCase()+hunt.game.version.name.slice(1).replace('-', ' ')}}</div> -->
                        <img v-if="hunt.chroma" class=" h-8 w-8 z-0" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png" alt="">
                    </div>
                </div>
                </div>
                <div class="flex items-center mt-4 text-gray-500 font-bold h-24 justify-between mx-10">
                    <div>
                        <img class="w-20 h-20 rounded-full z-0" :src="hunt.sprite" alt="">
                    </div>
                    <div>
                        <p class="text-white font-bold text-3xl">{{hunt.counter}}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import { getFirestore , doc, getDocs, collection, query, where} from 'firebase/firestore'
import { onMounted, ref, reactive } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'



export default {
    setup() {

        const hunts = ref([])
            const db = getFirestore();
            const HuntRef = collection(db, 'hunts')
            const q = query(HuntRef, where('status','==', 'running'))
    
            getDocs(q)
                .then((response) => {
                    hunts.value = []
                    hunts.value = response.docs.map((doc, i) => {
                        return doc.data();
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