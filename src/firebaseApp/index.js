import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
require('firebase/firestore')
require('firebase/auth')
// require('dotenv').config();

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID,
    mesasurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig)
export const analytics  = firebase.analytics();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.app().functions('us-central1');
export default firebase;
