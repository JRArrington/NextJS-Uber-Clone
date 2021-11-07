import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOhYIxZ_3CvE_DVwbuCEYqwilHZh6ukg",
  authDomain: "uber-next-clone-live-955b9.firebaseapp.com",
  projectId: "uber-next-clone-live-955b9",
  storageBucket: "uber-next-clone-live-955b9.appspot.com",
  messagingSenderId: "800251097216",
  appId: "1:800251097216:web:4b5546e4f0fbb162b37665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }