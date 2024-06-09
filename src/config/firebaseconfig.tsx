// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth, getReactNativePersistence, initializeAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRNm9tN0qsT8WV8xeoTCDfYK-PfGFd0ho",
    authDomain: "videojuego-typescript.firebaseapp.com",
    projectId: "videojuego-typescript",
    storageBucket: "videojuego-typescript.appspot.com",
    messagingSenderId: "55339897648",
    appId: "1:55339897648:web:58a890e9bbc65ae40eeef5"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//constante para optener servicio de autenticacion 
export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Referencia al servicio de la BDD
export const dbRealTime = getDatabase(firebase);

