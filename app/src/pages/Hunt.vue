<template>
        <div v-if="showModal">
            <div class="flex justify-center items-center antialiased fixed backdrop-filter backdrop-blur-sm w-full h-full z-10" @click.self="toggleModal">
                <div class=" bg-gray-800 text-white flex flex-col w-1/2 mx-auto rounded-lg shadow-xl">
                    <div class="flex flex-col justify-between p-6 rounded-tl-lg rounded-tr-lg">
                        <div class="flex flex-row justify-between rounded-tl-lg rounded-tr-lg">
                            <p class="text-sm font-bold mb-5">Enter your new number :</p>
                            <p class="font-semibold cursor-pointer" @click="toggleModal">X</p>
                        </div>
                        <input type="text" class="text-black block w-full mt-1 rounded-md gray-300 shadow-sm focus:indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" v-model="counter">
                        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold my-2 px-6 rounded-full focus:outline-none focus:shadow-outline" type="submit" @click="updateCounter">Update</button>
                    </div>
                </div>
            </div>
        </div>
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
                            <p @dblclick="toggleModal" class="text-white font-bold text-3xl">{{counter}}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-evenly my-10">
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white h-10 w-10 rounded-full" @click="increaseCounter">+</button>                       
                         </div>
                        <div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white h-10 w-10 rounded-full" @click="decreaseCounter">-</button>           
                        </div>
                    </div>
                    <div class="flex items-center justify-evenly flex-col my-10">
                        <h1 class="text-lg text-white font-bold my-5">Update hunt status</h1>
                        <form class="flex w-full justify-evenly" action="">
                        
                            <label class="flex flex-col justify-center items-center text-white text-sm font-bold" for="running">
                                <input type="radio" class="running mb-3" name="runStatus" @click="updateStatus('running')" id="running" :checked="status == 'running'">
                                Running
                            </label>
                            <label class="flex flex-col justify-center items-center text-white text-sm font-bold" for="hold">
                                <input type="radio" class="hold mb-3" name="runStatus" @click="updateStatus('hold')" id="hold" :checked="status == 'hold'">
                                On Hold
                            </label>
                            <label class="flex flex-col justify-center items-center text-white text-sm font-bold" for="ended">
                                <input type="radio" class="ended mb-3" name="runStatus" @click="updateStatus('ended')" id="ended" :checked="status == 'ended'">
                                Finished
                                </label>
                        </form>
                        <h1 class="text-lg text-white font-bold my-5">Delete Hunt</h1>
                         <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline" type="submit" @click="deleteHunt">Delete</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

input[type="radio"].running, input[type="radio"].hold, input[type="radio"].ended {
    position: relative;
}

input[type="radio"].running::before,
input[type="radio"].running::after,
input[type="radio"].hold::before,
input[type="radio"].hold::after,
input[type="radio"].ended::before,
input[type="radio"].ended::after {
    display: block;
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    content:'';
    width: 1rem;
    height: 1rem; 
    border-radius: 1rem;
}

input[type="radio"].running::before {
  border: 3px solid #90cdf4;
  background-color: #eee;
}
input[type="radio"].running:checked::after {
  background-color: #90cdf4;
}

input[type="radio"].hold::before {
  border: 3px solid #fbd38d;
  background-color: #eee;
}
input[type="radio"].hold:checked::after {
  background-color: #fbd38d;
}


input[type="radio"].ended::before {
  border: 3px solid #68d391;
  background-color: #eee;
}
input[type="radio"].ended:checked::after {
  background-color: #68d391;
}

</style>

<script>

import PlusIcon from "../assets/icons/plus.svg?component"
import MinusIcon from "../assets/icons/minus.svg?component"
import { getFirestore , doc, getDocs, updateDoc, collection, query, where, orderBy, deleteDoc } from 'firebase/firestore'
import { onMounted, ref, reactive, watch } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRoute } from 'vue-router'
import router from "../router"


export default {
    components: {
        MinusIcon,
        PlusIcon
    },
    setup() {

        let hunts = []
        const sprite = ref('')
        const chroma = ref(false)
        const game = ref('')
        const pokemonName = ref('')
        const status = ref('')
        const counter = ref(0)
        const route = useRoute()
        const db = getFirestore();
        const HuntRef = collection(db, 'hunts')
        const actualHuntRef = doc(db, 'hunts', route.params.id)
        const showModal = ref(false)
        const toggleModal = () => {
            showModal.value = !showModal.value
        }

        const updateCounter = async () => {
            await updateDoc(actualHuntRef, {
                counter: counter.value
            })
            showModal.value = false
        }

        const updateStatus = async (entryStatus) => {
            status.value = entryStatus
            await updateDoc(actualHuntRef, {
                status: status.value
            })
        }

        const alertF = () => {
            alert("oui")
        }

        const increaseCounter = async () => {
            counter.value++
            await updateDoc(actualHuntRef, {
                counter: counter.value
            })
        }

        const decreaseCounter =  async () => {
            counter.value--
            if(counter.value <= 0) {
                counter.value = 0;
            }
            await updateDoc(actualHuntRef, {
                counter: counter.value
            })
        }

        const deleteHunt = async () => {
            await deleteDoc(doc(db, "hunts", route.params.id))
            router.push({name : 'UserHunts'})
        }

        onMounted(() => {
            const isLoggedIn = ref(false)
            const auth = getAuth()
            // runs after firebase is initialized
            auth.onAuthStateChanged(function(user) {
                if (user) {
                    isLoggedIn.value = true // if we have a user
                    
                    
                    const q = query(HuntRef,where('id','==', route.params.id ))
    
                    getDocs(q)
                        .then((response) => {
                                hunts = response.docs.map((doc, id) => {
                                    return doc.data();
                                })
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

   
           return { sprite, chroma, game, pokemonName, status, counter, increaseCounter, decreaseCounter, updateStatus, deleteHunt, toggleModal, showModal, updateCounter }
            
    }
}

</script>