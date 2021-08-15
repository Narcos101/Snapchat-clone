import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCP0lH2I1c32GizyrvG1rQFvpDhvPGL7s4",
  authDomain: "snapchat-clone-dd1f2.firebaseapp.com",
  projectId: "snapchat-clone-dd1f2",
  storageBucket: "snapchat-clone-dd1f2.appspot.com",
  messagingSenderId: "1045137526094",
  appId: "1:1045137526094:web:96963211b6071c0cb9a21f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider }