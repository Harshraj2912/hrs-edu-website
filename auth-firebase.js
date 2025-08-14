// auth-firebase.js — uses modular Firebase SDK (v9+)
import firebaseConfig from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  sendEmailVerification, sendPasswordResetEmail, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function signupFirebase(name, email, password){
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCred.user);
  await setDoc(doc(db, "users", userCred.user.uid), {
    name: name || "",
    email: email,
    createdAt: new Date().toISOString()
  });
  return userCred.user;
}

export async function loginFirebase(email, password){
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}

export async function logoutFirebase(){
  await signOut(auth);
}

export async function sendPasswordReset(email){
  await sendPasswordResetEmail(auth, email);
}

export function onAuthChange(cb){
  onAuthStateChanged(auth, cb);
}

export async function getProfile(uid){
  const d = await getDoc(doc(db, "users", uid));
  return d.exists() ? d.data() : null;
}
