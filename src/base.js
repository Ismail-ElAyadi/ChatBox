import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArQPJZgcdRPZaI-IwVdeKMSIDNT1-eXzE",
  authDomain: "chatbox-sma3il.firebaseapp.com",
  databaseURL: "https://chatbox-sma3il.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base