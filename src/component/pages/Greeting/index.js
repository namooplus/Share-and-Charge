import React from 'react';
import Cookies from 'universal-cookie';
import firebase from "firebase/app"
import "firebase/auth"

import { BaseLayout, SplashLayout, AppLabel, ButtonWrapper } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {GoogleLogin} from "react-google-login"

import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';
const responseGoogle = (response) =>{
  console.log(response);
  console.log(response.profileObj);

}
const cookies = new Cookies();
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics

// Add the Firebase products that you want to use
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

// cookies.set(key2, value2, {secure: true, sameSite: 'none'});
function Greeting(props) {
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      
      // The signed-in user info.
      var user = result.user;
      console.log(user, token);
      // ...
    }).catch((error) => {
      console.log(error)
      // ...
    });
  
  }
  const click = () =>{
    console.log("click")
  }
  return (
    <BaseLayout>
        <SplashLayout>
            <AppIcon width="80px" height="80px"/>
            <AppLabel>Share & Charge</AppLabel>
        </SplashLayout>
        <ButtonWrapper onClick={onSubmit}>
        <ShadowButton onClick={click}><FontAwesomeIcon icon={faGoogle}/>&nbsp;&nbsp;구글 계정으로 로그인</ShadowButton>
        </ButtonWrapper>
    </BaseLayout>
  );
}


export default Greeting;