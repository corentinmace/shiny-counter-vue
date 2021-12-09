<template>
    <div class="h-screen flex justify-center items-center">
        <div class="w-1/2 bg-gray-500 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
            <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input v-model="email" class="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="username" type="email">
            </div>
            <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input v-model="password" class="mt-1 block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="password" type="password">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
            </div>
            <div  v-if="errMsg"  class="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <p class="font-bold">{{ errMsg }}</p>
            </div>
                <div class="flex items-center justify-center">
                <button @click="signIn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="">
                    Login
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
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router' // import router
  const auth = getAuth()
  const email = ref('')
  const password = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    signInWithEmailAndPassword(auth,email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        console.log(data)
        console.log('Successfully logged in!');
        router.push('/') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>
