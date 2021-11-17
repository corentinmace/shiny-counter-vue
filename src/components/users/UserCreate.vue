<template>
    <div class="w-1/2 mx-auto">
        <h2 class="text-2xl font-bold">Add User</h2>
        <form @submit.prevent="onSubmit">
            <div class="my-8 mx-auto max-w-md">
                <div class="grid grid-cols-1 gap-6">
                    <label class="block">
                        <span class="text-gray-700">Name</span>
                        <input v-model="form.name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>

                    <label class="block">
                        <span class="text-gray-700">Password</span>
                        <input v-model="form.password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
        
                    <label class="block">
                        <span class="text-gray-700">Email</span>
                        <input v-model="form.email" type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                </div>
                <button class="m-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Create User</button>
            </div>
        </form>
    </div>
</template>

<script>
import { createUser } from '../../firebase.js'
import { reactive } from 'vue'

export default {
    setup() {
        const form = reactive({ name: '', email: '', password: '' })
        const onSubmit = async () => {
            await createUser({ ...form })
            form.name = ''
            form.email = ''
            form.password = ''
        }

        return { form, onSubmit }
    }
}
</script>