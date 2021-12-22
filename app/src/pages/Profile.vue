<template>

<TopBar>
    <h1 class="text-text_primary font-bold">Profile</h1>
</TopBar>
    <!-- Profile Card -->
  <div class="justify-between shadow-lg pt-20 bg-gray-600 w-full flex flex-row flex-wrap antialiased h-1/3" :style="{
    backgroundImage: 'url(' + profileBanner +')',
    backgroundRepeat: 'no-repat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center'
  }">
    <div class="w-2/3">
      <div class="rounded-full shadow-lg mx-5 border-2 border-secondary antialiased h-32 w-32" v-if="profileImage" :style="{
    backgroundImage: 'url(' + profileImage +')',
    backgroundRepeat: 'no-repat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center'
  }"></div>
      <img class="rounded-full shadow-lg mx-5 border-2 border-secondary antialiased h-32 w-32" v-if="!profileImage" src="../assets/logo.png">

        
    </div>
    <div class="w-full mt-20 h-auto flex flex-row flex-wrap bg-secondary p-5">
      <div class="w-full flex justify-between text-slate font-semibold relative pt-3 md:pt-0">
        <div>
          <div class="text-2xl text-text_primary leading-tight">{{ displayName }}</div>
          <div class="text-normal cursor-pointer"><span class="border-b border-dashed text-text_primary pb-1">Member</span></div>
        </div>
        <div>
          <router-link class="flex text-text_primary items-center" :to="{ name: 'Settings' }">
              <SettingsIcon class="w-6 h-6 m-1 filter invert" />
                Settings
          </router-link>
          <button class="w-full text-right text-s text-red cursor-pointer pt-3 md:pt-0  font-bold right-0" @click="signOut">Logout</button>
        </div>
        <!-- <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> -->
      </div>
    </div>
  </div>
  <!-- End Profile Card -->
<div class="h-screen flex flex-col flex-wrap">
    <div class="text-text_secondary font-bold p-5">
      <p>Total Hunts : {{ totalHunts }}</p>
      <p>Hunts in progress : {{ runningHunts }}</p>
      <p>Hunts on hold : {{ holdHunts }}</p>
      <p>Finished Hunts : {{ finishedHunts }}</p>
    </div>
</div>

<p class="text-xs bottom-20 right-2 fixed">v.Beta-0.6.0</p>
</template>

<script>

  import { ref, onMounted } from 'vue' // used for conditional rendering
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
      const profileImage = ref()
      const profileBanner = ref()

      onMounted(() => {
        // runs after firebase is initialized
        auth.onAuthStateChanged(function(user) {
            if (user) {
              uid.value = user.uid
              // if (user.displayName == null) {
              //   let username = prompt("Please enter a nickname to continue :")
              //   updateProfile(user, {
              //     displayName: username
              //    })
              // }
              displayName.value = user.displayName
              profileImage.value = user.photoURL
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
                      profileBanner.value = userInfos.value[0].profileBanner
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
      })
      const signOut = () => {
        auth.signOut()
        router.push('/')
      }

      return { totalHunts, profileBanner, profileImage, runningHunts, holdHunts, finishedHunts, signOut, isLoggedIn, displayName, uid }
  }
}

</script>