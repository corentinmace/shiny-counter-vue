<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import { useRouter } from 'vue-router'
  import { getAuth, onAuthStateChanged } from 'firebase/auth'


  const router = useRouter()
  const isLoggedIn = ref(false)
  const auth = getAuth()
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    auth.signOut()
    router.push('/')
  }

</script>



<template>
<div class="bg-gray-800 fixed bottom-0 w-screen text-white flex justify-evenly h-15 py-3">
      <router-link to="/" active-class="opacity-100" class="lg:mt-0 text-grey-800 hover:text-grey-500 text-xs flex flex-col justify-center items-center opacity-30">
        <img class="w-6 h-6 m-1 filter invert" src="src/assets/icons/home.svg" alt="">
        Home
      </router-link>
      <router-link  v-if="isLoggedIn" to="/user-hunts" active-class="opacity-100" class="lg:mt-0 text-grey-800 hover:text-grey-500 text-xs flex flex-col justify-center items-center opacity-30">
        <img class="w-8 h-8 m-1 filter grayscale brightness-0 invert" src="https://www.pokepedia.fr/images/6/65/Sprite_Charme_Chroma_NB2.png" alt="">
        Hunts
      </router-link>
      <router-link v-if="isLoggedIn" to="/profile" active-class="opacity-100" class="lg:mt-0 text-grey-800 hover:text-grey-500 text-xs flex flex-col justify-center items-center opacity-30">
            <img class="w-6 h-6 m-1 filter invert" src="src/assets/icons/profil.svg" alt="">
             Profile
        </router-link>
  
      <router-link  v-if="!isLoggedIn" to="/sign-in" active-class="opacity-100" class="lg:mt-0 text-grey-800 hover:text-grey-500 text-xs flex flex-col justify-center items-center opacity-30">
        <img class="w-6 h-6 m-1 filter invert" src="src/assets/icons/login.svg" alt="">
        Log-in
      </router-link>
      <router-link  v-if="!isLoggedIn" to="/register" active-class="opacity-100" class="lg:mt-0 text-grey-800 hover:text-grey-500 text-xs flex flex-col justify-center items-center opacity-30">
        <img class="w-6 h-6 m-1 filter invert" src="src/assets/icons/register.svg" alt="">
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
