<template>
    <CreateHuntModal @close="toggleModal" v-if="showModal"/>
    <HuntsList />
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" @click="toggleModal">Create new hunt</button>
</template>

<script>
// @ is an alias to /src
import CreateHuntModal from '../components/hunts/CreateHuntModal.vue'
import HuntsList from '../components/hunts/HuntsList.vue'


export default {
  data() {
    return { 
      showModal: false
    }
  },
  name: 'Home',
  components: {
      CreateHuntModal,
      HuntsList
  },
  methods: {
    toggleModal() {
        this.showModal = !this.showModal
    }
  }
}
</script>
