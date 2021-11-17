<template>
  <div class="w-full max-w-xs mx-auto">
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/users/LoginForm.vue'

export default {
  name: 'Login',
  components: {
      LoginForm
  }
}
</script>
