import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2Wu7V1aTD8oEeyzRlt3fyo5hVBTy2P4U",
    authDomain: "crwn-db-2b7f5.firebaseapp.com",
    projectId: "crwn-db-2b7f5",
    storageBucket: "crwn-db-2b7f5.appspot.com",
    messagingSenderId: "197885334289",
    appId: "1:197885334289:web:444fd16ea36fd61314f2b0",
    measurementId: "G-5L96TS6ELD"
};

export const createUserProfileDocument = async (userAuth,addtionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc('users/${usersAuth.uid}')
    const snapShot = await userRef.get();
    if( !snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...addtionalData
            })
        } catch (error) {
                console.log('error while creating user',error.message);
        }
    }
    return userRef;
   // console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;