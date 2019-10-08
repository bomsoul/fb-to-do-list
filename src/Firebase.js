import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4Ebc-gO0_OTOzwLIaK3j46-12cHpsfjc",
    authDomain: "todolist-c24e9.firebaseapp.com",
    databaseURL: "https://todolist-c24e9.firebaseio.com",
    projectId: "todolist-c24e9",
    storageBucket: "",
    messagingSenderId: "588047571271",
    appId: "1:588047571271:web:1a160519ee2a14a8"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;