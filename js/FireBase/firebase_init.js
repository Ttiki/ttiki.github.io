import { initializeApp } from 'firebase/app'
import {
    getFireStore,
    collection
} from 'firebase/firestore'

//Firebase data
const firebaseConfig = {
    apiKey: "AIzaSyCn5vwgBW6ioYfuZWHyKMMrVuNPjNfQn1g",
    authDomain: "ttiki-github-page.firebaseapp.com",
    databaseURL: "https://ttiki-github-page-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ttiki-github-page",
    storageBucket: "ttiki-github-page.appspot.com",
    messagingSenderId: "485299721979",
    appId: "1:485299721979:web:7c29ebfba3c86a8b01825e"
};

//Init our app
initializeApp(firebaseConfig)

//Init services
const firestoreDb = getFireStore()

//collection ref
const libraryRef = collection(firestoreDb, "library")

//get collection data
getDocs(libraryRef).then((snapshot) => {
    console.log(snapshot.docs)
}).catch((err) => {

});