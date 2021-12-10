<template>

<TopBar>
  <div v-if="uid !== ''" class="flex items-center">
    <h1 class="text-text_primary font-bold mx-5">Profile</h1>
      <router-link :to="{ name: 'Settings', params: { id: uid } }">
      <SettingsIcon class="w-6 h-6 m-1 filter invert" />
    </router-link>
  </div>
</TopBar>
<div class="w-screen h-screen flex flex-col flex-wrap p-3 pt-20">

  <div class="mx-auto w-2/3">
    <!-- Profile Card -->
    <div class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style="
      background-image: url('https://source.unsplash.com/1600x900');
      background-repeat: no-repat;
      background-size: cover;
      background-blend-mode: multiply;
    ">
      <div class="md:w-1/3 w-full">
        <img class="rounded-lg shadow-lg antialiased " src="https://source.unsplash.com/200x200">  
      </div>
      <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div class="w-full text-right text-text_primary font-semibold relative pt-3 md:pt-0">
          <div class="text-2xl text-text_primary leading-tight">{{ displayName }}</div>
          <div class="text-normal text-text_primary hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">Member</span></div>
          <button class="text-s text-red-300 hover:text-red-500 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0" @click="signOut">Logout</button>
          <!-- <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> -->
        </div>
      </div>
    </div>
    <!-- End Profile Card -->

    <div class="my-5 text-text_secondary font-bold">
      <p>Total Hunts : {{ totalHunts }}</p>
      <p>Hunts in progress : {{ runningHunts }}</p>
      <p>Hunts on hold : {{ holdHunts }}</p>
      <p>Finished Hunts : {{ finishedHunts }}</p>
    </div>
 
  </div>
</div>
<p class="text-xs bottom-20 right-2 fixed">v.Beta-0.5.2</p>
</template>

<script>

  import { ref } from 'vue' // used for conditional rendering
  import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import { getFirestore , setDoc, doc, getDocs, collection, query, where, orderBy} from 'firebase/firestore'
  import TopBar from "../components/TopBar.vue"
  import SettingsIcon from "../assets/icons/settings.svg?component"
 
  

export default {
  components: {
      SettingsIcon,
      TopBar
  },
  setup() {

      const uid = ref('')
      const router = useRouter()
      const isLoggedIn = ref(true)
      const displayName = ref('')
      const auth = getAuth()
      const hunts = ref()
      const totalHunts = ref(0)
      const runningHunts = ref(0)
      const holdHunts = ref(0)
      const finishedHunts = ref(0)
      const updatedProfile = ref(false)

      // runs after firebase is initialized
      auth.onAuthStateChanged(function(user) {
          if (user) {

            uid.value = user.uid
            if (user.displayName == null) {
              let username = prompt("Please enter a nickname to continue :")
              updateProfile(user, {
                displayName: username
               })
            }
            displayName.value = user.displayName
            isLoggedIn.value = true // if we have a user
          
            const db = getFirestore();
            const UserRef = collection(db, "users")
            const userQuerry = query(UserRef ,where('uid','==', uid.value))
            const userInfos = ref()
            //console.log(user)
            getDocs(userQuerry)
                .then((response) => {
                    userInfos.value = response.docs.map((doc, id) => {
                        return doc.data();
                    })
                    if (userInfos.value.length == 0) {
                      updatedProfile.value = false
                      setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        displayName: user.displayName,
                        email: user.email
                      })
                    } else {
                      updatedProfile.value = true
                    }
                    console.log("Updated Profile? :", updatedProfile.value)
              })



              const HuntRef = collection(db, 'hunts')
              const totalHuntsQuery = query(HuntRef,where('user','==', uid.value ))
        
              getDocs(totalHuntsQuery)
                .then((response) => {
                    hunts.value = response.docs.map((doc, id) => {
                        return doc.data();
                    })

                    //console.log(hunts.value)
                    totalHunts.value = hunts.value.length

                    for (let i = 0; i < hunts.value.length; i++) {
                      if(hunts.value[i].status === 'running') {
                        runningHunts.value++
                      } else if (hunts.value[i].status === 'hold') {
                        holdHunts.value++
                      } else if (hunts.value[i].status === 'ended') {
                        finishedHunts.value++
                      }
                      
                    }
                })
          } else {
            isLoggedIn.value = false // if we do not
          }
      })
      const signOut = () => {
        auth.signOut()
        router.push('/')
      }

      return { totalHunts, runningHunts, holdHunts, finishedHunts, signOut, isLoggedIn, displayName, uid }
  }
}

</script>