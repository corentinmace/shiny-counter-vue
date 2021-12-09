<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-1/2 bg-gray-500 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <div class="mb-6">
            <label class="block  text-sm font-bold mb-2" for="username">
                Email
            </label>
            <input v-model="email" class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="username" type="email">
        </div>
        <div class="mb-6">
            <label class="block  text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input v-model="password" class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="password" type="password">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="mb-6">
            <label class="block  text-sm font-bold mb-2" for="nickname">
                Nickname
            </label>
            <input v-model="nickname" class="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="nickname" type="text">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-center">
          <button @click="register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="">
              Register
          </button>
          <!-- <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
          </a> -->
        </div>
    </div> 
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  const auth = getAuth()
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const nickname = ref('')
  const router = useRouter() // get a reference to our vue router
  const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
      .then((data) => {
        updateProfile(data.user, {
          displayName: nickname.value
        })
        console.log('Successfully registered!');
        router.push('/') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>
 