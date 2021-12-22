<template>
    <div class="z-40 flex justify-between p-5 py-6 items-center bg-secondary text-text_primary fixed top-0 w-screen text-white h-10 py-3">
            <BackArrow @click="back" class=" w-6 h-6 m-1 filter invert" />
        <slot></slot>
    </div>
</template>

<style>

</style>

<script>
import BackArrow from "../assets/icons/back_arrow.svg?component"
import router from "../router"

export default {
    components: {
        BackArrow
    }, 
    setup() {
        const back = () => {
            router.go(-1)
        } 

        return { back }
    }
}

</script>