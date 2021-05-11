import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyApt17tNsfOsOIrcNa738bRPcvOKvtoJxs",
        authDomain: "onlineshoppingapp-db.firebaseapp.com",
        projectId: "onlineshoppingapp-db",
        storageBucket: "onlineshoppingapp-db.appspot.com",
        messagingSenderId: "659179980730",
        appId: "1:659179980730:web:edf596b349aebf455d3f83",
        measurementId: "G-3HXMY3FGJS"
      
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists) {
           const { displayName, email } = userAuth;
           const createAt = new Date();  
           
           try {
             await userRef.set({
                 displayName,
                 email,
                 createAt,
                 ...additionalData
             })   
           } catch(error) {
                console.log('error creating user', error.message);
           }
        }

        return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;