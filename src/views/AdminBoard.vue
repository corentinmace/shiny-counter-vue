<template>
  <div class="overflow-x-auto">
    <div class="min-w-screen min-h-screen bg-gray-100 flex items-center flex-col justify-center bg-gray-100 font-sans overflow-hidden">
          <UserCreate />
          <UserList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCreate from '../components/users/UserCreate.vue'
import UserList from '../components/users/UserList.vue'

export default {
  name: 'AdminBoard',
  components: {
      UserCreate,
      UserList
  }
}
</script>
