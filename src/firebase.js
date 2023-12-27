import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDOLOAj-Vsvj7oVGD0D5eCLFDyCb7OboV4",
    authDomain: "chatdorm-ce4f3.firebaseapp.com",
    projectId: "chatdorm-ce4f3",
    storageBucket: "chatdorm-ce4f3.appspot.com",
    messagingSenderId: "159186340639",
    appId: "1:159186340639:web:2b2208616f148933e7fe2a"
  }).auth();