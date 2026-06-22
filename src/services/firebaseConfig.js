// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }       from "firebase/auth";
import { getFirestore }  from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSV4ty7YBOL1njcdQ63MJhogkPGFDnWsc",
  authDomain: "site-de-anuncio.firebaseapp.com",
  projectId: "site-de-anuncio",
  storageBucket: "site-de-anuncio.firebasestorage.app",
  messagingSenderId: "354629894712",
  appId: "1:354629894712:web:73cdf8d886f8661edc5ccd",
  measurementId: "G-WBWWL31QZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //Abre uma conexão entre o app e o firebase

export const db   = getFirestore(app);
export const auth = getAuth(app) //Cria um objeto para processos de autentificação

/*
PS: Maria, caso eu esqueça de apagar os comentários antes do envio, eles foram feitos por mim por questões didáticas,
e não pela IA :).
 */
