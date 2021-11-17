import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyDOX9N1AC8lDfaNAINumEy0VBUt6c7xZo4",
    authDomain: "shiny-counter-c5169.firebaseapp.com",
    projectId: "shiny-counter-c5169",
    storageBucket: "shiny-counter-c5169.appspot.com",
    messagingSenderId: "425708158862",
    appId: "1:425708158862:web:eaee1351edc718ab55eedf"
}

const app = firebase.initializeApp(config)

const db = app.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const checkUser = async email => {
    // const user = await usersCollection.doc(email).get()
    // console.log("firebase", user)
    // return user.exists ? user.data() : null
    app.auth().getUserByEmail(email)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully fetched user data:', userRecord.toJSON());
  })
  .catch(function(error) {
   console.log('Error fetching user data:', error);
  });
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}