<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th scope="col m-3">Name</th>
                    <th scope="col m-3">Email</th>
                    <th scope="col m-3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{id, name, email } in users" :key="id">
                    <td class="m-3">{{ name }}</td>
                    <td>{{ email }}</td>
                    <td class="m-3">
                        <router-link :to="`/edit/${id}`">
                            <button class="m-3">Edit</button>
                        </router-link>
                        <button class="m-3" @click="deleteUser(id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>   
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