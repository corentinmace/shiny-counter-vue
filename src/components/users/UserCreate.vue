<template>
    <div class="">
        <form @submit.prevent="onSubmit">
           <div>
               <label >Name</label>
               <input v-model="form.name" class="text-black" required />
           </div> 

            <div>
                <label>Email</label>
                <input v-model="form.email" type="email" class="text-black" required />
            </div>

            <button type="submit">Create User</button>
        </form>
    </div>
</template>

<script>
import { createUser } from '../../firebase.js'
import { reactive } from 'vue'

export default {
    setup() {
        const form = reactive({ name: '', email: '' })
        const onSubmit = async () => {
            await createUser({ ...form })
            form.name = ''
            form.email = ''
        }

        return { form, onSubmit }
    }
}
</script>