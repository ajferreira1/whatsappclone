import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import firebaseConfig from "./firebaseConfig";


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore(app);

export default {
    fbPopup: async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider)
        return result
    },
    addUSer:async  (u) => {
        await db.collection("users").doc(u.id).set({
            name: u.name,
            avatar: u.avatar
        }, {merge: true})
    }
}
