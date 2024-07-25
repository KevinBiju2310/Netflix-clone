import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKf_Jwj7Dlfr4oSceMtkpedeVvsy5RHkc",
  authDomain: "netflix-clone-31f53.firebaseapp.com",
  projectId: "netflix-clone-31f53",
  storageBucket: "netflix-clone-31f53.appspot.com",
  messagingSenderId: "928421357056",
  appId: "1:928421357056:web:04d558316671f5c401dae5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
