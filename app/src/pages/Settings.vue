<template class="bg-secondary h-full">
    <TopBar>
         <h1 class="text-text_primary font-bold">Settings</h1>
    </TopBar>
    <ThemeSelect />

    <UpdateUserInfo />
</template>

<style>

</style>

<script>
import TopBar from "../components/TopBar.vue"
import ThemeSelect from "../components/ThemeSelect.vue"
import UpdateUserInfo from "../components/UpdateUserInfo.vue"

export default {
    components: {
        TopBar,
        ThemeSelect,
        UpdateUserInfo
    },

}

</script>