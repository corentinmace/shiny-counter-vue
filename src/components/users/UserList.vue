<template>
    <div class="w-full lg:w-5/6">
        <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-center">Email</th>
                        <th class="py-3 px-6 text-center">Password</th>
                        <th class="py-3 px-6 text-center">Name</th>
                        <th class="py-3 px-6 text-center">Action</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                    <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="{id, name, email, password } in users" :key="id">
                        <td class="py-3 px-6 whitespace-nowrap">
                            <div class="flex justify-center items-center">
                                {{ email }}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left  whitespace-nowrap">
                            <div class="flex justify-center items-center">
                                {{ password }}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left  whitespace-nowrap">
                            <div class="flex justify-center items-center">
                                {{ name }}
                            </div>
                        </td>
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex justify-center items-center">
                                <router-link :to="`/edit/${id}`">
                                    <button class="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">Edit</button>
                                </router-link>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" @click="deleteUser(id)">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>   
        </div>
    </div>
</template>

<script>
import { useLoadUsers, deleteUser } from '../../firebase.js'

export default {
    setup() {
        const users = useLoadUsers()
        return { users, deleteUser }
    }
}

</script>