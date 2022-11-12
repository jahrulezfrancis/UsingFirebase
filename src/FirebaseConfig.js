import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDKq8guDthvcrVUP5uWGoYyOLG-seegPQg",
    authDomain: "full-stack-user-site.firebaseapp.com",
    projectId: "full-stack-user-site",
    storageBucket: "full-stack-user-site.appspot.com",
    messagingSenderId: "624107988200",
    appId: "1:624107988200:web:4ce96a5af5f642b56e955d",
    measurementId: "G-1RLQLPZ9ZH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)



// const analytics = getAnalytics(app);