import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, db } from '../firebaseApp';
import firebase from 'firebase';
import { createUser } from '../firebaseApp/controllers';
import { AuthContext } from './Blog/context/AuthContext';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

//redux to do is to figure out how to display someone as logged in if they leave the web page


const Signup = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    const { setCurrentUser } = useContext(AuthContext);
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false,
        },

    };

    // var currentUid = null;
    // auth().onAuthStateChanged(function (user) {
    //         // onAuthStateChanged listener triggers every time the user ID token changes.  
    //         // This could happen when a new user signs in or signs out.  
    //         // It could also happen when the current user ID token expires and is refreshed.  
    //         if (user && user.uid != currentUid) {
    //             // Update the UI when a new user signs in.  
    //             // Otherwise ignore if this is a token refresh.  
    //             // Update the current user UID.  
    //             currentUid = user.uid;

    //         } else {
    //             // Sign out operation. Reset the current user UID.  
    //             currentUid = null;
    //             console.log("no user signed in");
    //         }
    //          });  


    // auth.onAuthStateChanged(user => {
    //     if (user) {
    //         // db.collection('users').onSnapshot(snapshot => {
    //         //     setupGuides(snapshot.docs);
    //         //     setupUI(user);
    //         // }, err => console.log(err.message));

    //         console.log(user)
    //     } else {
    //         console.log('false, no user')
    //     }
    // });



    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {

            if (user) {
                const usersRef = await db.collection('users').doc(user.uid).get()
                console.log(usersRef)
                setCurrentUser(user)

                if (!usersRef.id) {
                    console.log('doc doesnt exist')
                    createUser(user)
                } else {

                    console.log('doc exists', usersRef)
                }
                // usersRef.get().then((docSnapshot) => {

                //     if (docSnapshot.exists || !usersRef.id) {

                //         usersRef.onSnapshot((doc) => {
                //         // do    stuff with the data
                //         //  console.log('user exists', doc)

                //         })

                //         return true

                //     } else {


                // }});

                // // createUser(user) // create the document
                // const logger = async() => console.log(usersRef)

            }
            // let usersRef =  await firebase.firestore().collection('users').where('id', '==', user.uid).get();
            // console.log(usersRef)
            // if(user !=null || !usersRef){

            //     // destructure from user 
            //     let {email, displayName, photoUrl, uid } = user



            // }

            setIsSignedIn(!!user);



        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [isSignedIn]);

    return (
        <>
            {!isSignedIn ?

                <div className="sign-up-container">

                    <h1 className="sign-up__heading">Sign into the Prosp(a)rity Project!</h1>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>


                :

                <div className="sign-up-container">
                    <h1 className="sign-up__heading">{`Welcome ${firebase.auth().currentUser.displayName.split(" ")[0]}!`}</h1>
                    <h2 className="sign-up__heading--confirm"> You are signed in!</h2>
                    <Link className="sign-up__button exit" to="/" onClick={() => firebase.auth().signOut()}>Sign-out</Link>
                    <Link className="sign-up__button blog" to="/blog" >Continue to Blog</Link>
                </div>


            }
        </>
    )
}

export default Signup;