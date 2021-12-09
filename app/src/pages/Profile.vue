<template>
<div class="w-screen h-screen flex flex-col flex-wrap p-3">
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
        <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div class="text-2xl text-white leading-tight">{{ displayName }}</div>
          <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">Member</span></div>
          <button class="text-s text-red-300 hover:text-red-500 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0" @click="signOut">Logout</button>
          <!-- <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">Last Seen: <b>2 days ago</b></div> -->
        </div>
      </div>
    </div>
    <!-- End Profile Card -->
 
  </div>
</div>



</template>

<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import { getAuth, onAuthStateChanged } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const isLoggedIn = ref(true)
  const displayName = ref('')
  const auth = getAuth()
  // runs after firebase is initialized
  auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        displayName.value = user.displayName
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