
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBXFlSjpgYUkePMNHzfCg9K1cOqwj5GiI",
  authDomain: "e-commerceventiladores.firebaseapp.com",
  projectId: "e-commerceventiladores",
  storageBucket: "e-commerceventiladores.appspot.com",
  messagingSenderId: "275446525097",
  appId: "1:275446525097:web:f25aa3d8cc76f968d90db8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;