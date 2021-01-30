import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqc6nQNOgxod2AeFv75v4SCWBSepuuyXg',
  authDomain: 'crwn-db-6c0f1.firebaseapp.com',
  projectId: 'crwn-db-6c0f1',
  storageBucket: 'crwn-db-6c0f1.appspot.com',
  messagingSenderId: '1015970272638',
  appId: '1:1015970272638:web:b8eaef99df3fef4f36cf2f',
  measurementId: 'G-7V4L3PQE79'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
