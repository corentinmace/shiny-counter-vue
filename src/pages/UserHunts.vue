<template>
    <div class="flex justify-center items-center py-10 flex-col z-0">
        <h1 class="text-white text-4xl m-5">Your Hunts :</h1>
        <UserHuntList  />   
    </div>
</template>

<script>
import UserHuntList from '../components/UserlHuntList.vue'

export default {
    components: {
        UserHuntList
    }
}

</script>