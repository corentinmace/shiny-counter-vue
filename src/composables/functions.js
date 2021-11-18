import { getCurrentInstance } from 'vue'

const PokeFunctions = () => {
    const instance = getCurrentInstance()
    const toggleModal = () =>{
        instance.parent.toggleModal()
    }

    const closeModal = () => {
        $emit('close')
    }

    return {
        closeModal,
        toggleModal
    }

}

export default PokeFunctions