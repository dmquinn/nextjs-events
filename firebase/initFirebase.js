import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCy_DyQyY0EhLoyW87oFsS36eiAPsmYRDA",
  authDomain: "nextapp-b910a.firebaseapp.com",
  databaseURL:
    "https://nextapp-b910a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nextapp-b910a",
  storageBucket: "nextapp-b910a.appspot.com",
  messagingSenderId: "387588166074",
  appId: "1:387588166074:web:4a7a65e81d46ef8d878d83",
  measurementId: "G-XWGZQ9MKC8",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
export { firestore };
