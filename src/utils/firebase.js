import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FB_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FB_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_FB_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_FB_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FB_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_FB_APPID}`,
  measurementId: `${process.env.REACT_APP_FB_MEASUREMENTID}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_URL}`,
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export {auth, provider, storage };
export default db;