<template>
    <form @submit.prevent="connect" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                 Email
            </label>
            <input v-model="form.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="username" type="email">
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input v-model="form.password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required id="password" type="password">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
            <div class="flex items-center justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                Login
            </button>
            <!-- <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a> -->
        </div>
    </form>  
</template>

<script>
import { checkUser } from '../../firebase.js'
import { reactive, computed } from 'vue'

export default {
    setup() {
        const form = reactive({ email: '', password: ''})
        const connect = async () => {     
            const userEmail = computed(() => form.email)
            console.log(userEmail.value)
            const user = await checkUser(userEmail.value)
            console.log(user)
            if(user) {
                console.log("user exists")
            } else {
                console.log("nope")
            }
        }
        return { connect, form }
    }
}
</script>