<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref, watchEffect, onMounted } from 'vue' // used for conditional rendering
  import { useRouter } from 'vue-router'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { getFirestore , doc, getDocs, updateDoc, collection, query, where, orderBy, deleteDoc } from 'firebase/firestore'


  import HomeIcon from "./assets/icons/home.svg?component"
  import LoginIcon from "./assets/icons/login.svg?component"
  import RegisterIcon from "./assets/icons/register.svg?component"
  import ProfileIcon from "./assets/icons/profile.svg?component"


  export default {
    components: {
      HomeIcon,
      LoginIcon,
      RegisterIcon,
      ProfileIcon,
    }, 
    setup() {

      const isMounted = ref(false)
      const isLoggedIn = ref(false)
      onMounted(() => {
        const router = useRouter()
        const auth = getAuth()
        const db = getFirestore()
        const UserRef = collection(db, "users")
        let thisUser = []
        let userTheme = ref()

      // runs after firebase is initialized
      auth.onAuthStateChanged(function(user) {
        if (user) {
          isLoggedIn.value = true // if we have a user
          const q = query(UserRef, where('uid', '==', user.uid))

          getDocs(q)
            .then((response) => {
                thisUser = response.docs.map((doc, id) => {
                  return doc.data();
                })
            userTheme.value = thisUser[0].themePreferencies

            console.log(userTheme.value)

            document.getElementById("app").classList.add(userTheme.value)
            isMounted.value = true
            })

        } else {
          isLoggedIn.value = false // if we do not
            isMounted.value = true
        }
        })
        const signOut = () => {
          auth.signOut()
          router.push('/')
        }
      })


        return { isLoggedIn, isMounted }
    }
  }

</script>



<template>
<div v-if="!isMounted" class="w-screen h-screen bg-text_black absolute z-50 flex justify-center items-center flex-col">
  <img class="w-10 h-10" src="https://media3.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif" alt="">
  <p class="text-text_primary font-bold p-5">Now Loading..</p>
</div>
<div class="bg-secondary fixed bottom-0 w-screen text-text_primary flex justify-evenly h-15 py-3 z-40">
      <router-link to="/" active-class="opacity-100" class="lg:mt-0 text-xs flex flex-col justify-center items-center opacity-30">
        <HomeIcon class="w-6 h-6 m-1 filter invert" />
        Home
      </router-link>
      <router-link  v-if="isLoggedIn" to="/user-hunts" active-class="opacity-100" class="lg:mt-0 text-xs flex flex-col justify-center items-center opacity-30">
        <img class="w-8 h-8 m-1 filter grayscale brightness-0 invert" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png" alt="">
        Your Hunts
      </router-link>
      <router-link v-if="isLoggedIn" to="/profile" active-class="opacity-100" class="lg:mt-0 text-xs flex flex-col justify-center items-center opacity-30">
            <ProfileIcon class="w-6 h-6 m-1 filter invert" alt=""/>
             Profile
        </router-link>
  
      <router-link  v-if="!isLoggedIn" to="/sign-in" active-class="opacity-100" class="lg:mt-0 text-xs flex flex-col justify-center items-center opacity-30">
        <LoginIcon class="w-6 h-6 m-1 filter invert" />
        Log-in
      </router-link>
      <router-link  v-if="!isLoggedIn" to="/register" active-class="opacity-100" class="lg:mt-0 text-xs flex flex-col justify-center items-center opacity-30">
        <RegisterIcon class="w-6 h-6 m-1 filter invert"/>
        Register
      </router-link>
</div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
