import{auth, db} from './firebaseApp'

auth.onAuthStateChanged(user => {
    if (user) {
        // db.collection('users').onSnapshot(snapshot => {
        //     setupGuides(snapshot.docs);
        //     setupUI(user);
        // }, err => console.log(err.message));

        console.log(user)
    } else {
        console.log('false, no user')
    }
});

