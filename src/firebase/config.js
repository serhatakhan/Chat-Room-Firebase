// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER,
  appId: import.meta.env.VITE_APP,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yapısının referansını alma
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referasını alma
export const db = getFirestore(app)


// * auth ile kullanıcıyı bu veri tabanına kaydet diyoruz,
// * provider da giriş yapacağı sağlayıcıyı belirtiyor
