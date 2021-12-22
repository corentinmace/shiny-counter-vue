import { createApp } from 'vue'
import App from './App.vue'
import '/src/assets/select.css'
import '/src/assets/index.css'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDOX9N1AC8lDfaNAINumEy0VBUt6c7xZo4",
    authDomain: "shiny-counter-c5169.firebaseapp.com",
    projectId: "shiny-counter-c5169",
    storageBucket: "shiny-counter-c5169.appspot.com",
    messagingSenderId: "425708158862",
    appId: "1:425708158862:web:eaee1351edc718ab55eedf"
  };

initializeApp(firebaseConfig)



createApp(App).use(router).mount('#app')

// Hunt Status :
// In progress : running
// Paused : hold
// Finished : ended