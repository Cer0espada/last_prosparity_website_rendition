import firebase from 'firebase'; 
const {auth} = firebase;

const db = firebase.firestore();

export const createUser = async ({
    email,
    displayName,
    uid,
    photoUrl

}) => {

    firebase.firestore().collection('users').doc(uid).set({
        first_name: displayName.split(" ")[0],
        last_name: displayName.split(" ")[1],
        displayName,
        email,
        id: uid,
        // photoUrl: photoUrl,
        created_at: new Date().getTime(),
        roles: "user"

    })

    console.log('user successfully created')
}

// export const updateUser = async()