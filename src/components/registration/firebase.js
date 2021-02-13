import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyB7AUZQcae-TH9MiOj1jL5IHXivyKdrUgk',
    authDomain: 'financeproject-9459d.firebaseapp.com',
    projectId: 'financeproject-9459d',
    storageBucket: 'financeproject-9459d.appspot.com',
    messagingSenderId: '346275019019',
    appId: '1:346275019019:web:462ebb20948ae40d3d4a0e',
})
export const auth = app.auth()
export default app
 