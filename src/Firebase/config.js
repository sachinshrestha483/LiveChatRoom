import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCUdD3QQeWbTkS8QBXvim82So4u5jfNapg",
    authDomain: "vuefirebase1-1cfc6.firebaseapp.com",
    projectId: "vuefirebase1-1cfc6",
    storageBucket: "vuefirebase1-1cfc6.appspot.com",
    messagingSenderId: "1039058265818",
    appId: "1:1039058265818:web:360ead079a27bcf3f1e7e3"
  };

  // inti firebase

  firebase.initializeApp(firebaseConfig)

  const projectFirestore= firebase.firestore()
  const timestamp= firebase.firestore.FieldValue.serverTimestamp

  const projectAuth=firebase.auth()
  export{projectFirestore,timestamp,projectAuth}