<template>
    <TopBar>
         <h1 class="text-text_primary font-bold">Your Hunts</h1>
    </TopBar>
    <div class="flex justify-center items-center py-10 flex-col z-0">
        <UserHuntList  />   
    </div>
</template>

<script>
import UserHuntList from '../components/UserlHuntList.vue'
import TopBar from "../components/TopBar.vue"

export default {
    components: {
        UserHuntList,
        TopBar
    }
}

</script>