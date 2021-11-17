<template>
  <div class="Admin">
      <h1>Admin</h1>
      <div class="bg-black text-white">
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
