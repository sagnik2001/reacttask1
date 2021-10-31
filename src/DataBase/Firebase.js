import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
const firebaseApp = {
  apiKey: "AIzaSyDjx97pt_tlNlGP8ObAd_IVHRnJR0UcLnw",
 authDomain: "react-contacts-store.firebaseapp.com",
 projectId: "react-contacts-store",
 storageBucket: "react-contacts-store.appspot.com",
 messagingSenderId: "192120212752",
 appId: "1:192120212752:web:d0243e61f843859f196995"
}
firebase.initializeApp(firebaseApp)
var db=firebase.database()
export {db}
