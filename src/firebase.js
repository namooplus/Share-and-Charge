import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRXuDZ7uqMRsuGm-EiT6dW0n636bf-VwA",
    authDomain: "shareandcharge.firebaseapp.com",
    projectId: "shareandcharge",
    storageBucket: "shareandcharge.appspot.com",
    messagingSenderId: "16778233937",
    appId: "1:16778233937:web:dd822b6b1d0d33a24f9070",
    measurementId: "G-JV3241D0SC"
  };
  firebase.initializeApp(firebaseConfig);