<template>
<div class="p-2 bg-yellow-800 items-center text-yellow-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
  <span class="flex rounded-full bg-yellow-500 uppercase px-2 py-1 text-xs font-bold mr-3">Update</span>
  <span class="font-semibold mr-2 text-left flex-auto">You are going to update a user, this action is reversible by coming back on this page later</span>
  <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</div>
<div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
    <h2 class="text-2xl font-bold">Edit User</h2>
    <form @submit.prevent="update">
        <div class="my-8 mx-auto max-w-md">
            <div class="grid grid-cols-1 gap-6">
                <label class="block">
                    <span class="text-gray-700">Name</span>
                    <input v-model="form.name" type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required />
                </label>
    
                <label class="block">
                    <span class="text-gray-700">Email</span>
                    <input v-model="form.email" type="email" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" required />
                </label>
            </div>
            <button class="m-8 bg-yellow-500 hover:bg-yellow-700 font-bold py-2 px-4 rounded-full" type="submit">Edit User</button>
        </div>
    </form>
</div>
</template>


<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUser, updateUser } from '../firebase.js'


export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const userId = computed(() => route.params.id)
    
    const form = reactive({ name: '', email: '' })
    onMounted(async () => {
      const user = await getUser(userId.value)
      form.name = user.name
      form.email = user.email
    })

    const update = async () => {
      await updateUser(userId.value, { ...form })
      router.push('/admin')
      form.name = ''
      form.email = ''
    }

    return { form, update }
  },
  // name: 'Edit',
  // components: {

  // }
}
</script>