<template class="bg-secondary h-full">
    <TopBar>
         <h1 class="text-text_primary font-bold">Settings</h1>
    </TopBar>
    <ThemeSelect />
</template>

<style>

</style>

<script>
import TopBar from "../components/TopBar.vue"
import ThemeSelect from "../components/ThemeSelect.vue"

export default {
    components: {
        TopBar,
        ThemeSelect,
    }
}

</script>