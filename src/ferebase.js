import   firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDngEhpWAnsfcevbcFUQgMUKLXLqYsHgw",
    authDomain: "facebook-clone-823e6.firebaseapp.com",
    projectId: "facebook-clone-823e6",
    storageBucket: "facebook-clone-823e6.appspot.com",
    messagingSenderId: "438626391121",
    appId: "1:438626391121:web:09aab1aff45bb69318d470",
    measurementId: "G-JXQEF46MYJ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider= new firebase.auth.GoogleAuthProvider()
  
  export {auth,provider}

  export default db