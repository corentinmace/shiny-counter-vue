<template>
    <div v-for="hunt in hunts">
        <p>Charme Chroma: {{ hunt.chroma }}</p>
        <p>Game: {{ hunt.game.version.name}}</p>
        
        
    </div>
</template>

<script>
import { useLoadHunts} from '../../firebase.js';

export default {
    setup() {
        const hunts = useLoadHunts()
        return { hunts }
    
    },
     data() {
        return {
            sprite: '',
            version: ''
        }
    },
    methods: {
        
    }
}

</script>