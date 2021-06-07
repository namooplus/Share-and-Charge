import React, { useState, useRef, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import firebase from "firebase/app";
import "firebase/auth";
import { browserHistory } from "react-router";
import {
  BaseLayout,
  SplashLayout,
  AppLabel,
  ButtonWrapper,
} from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DOMAIN } from "../../../util/domain";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleLogin } from "react-google-login";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ShadowButton from "../../common/ShadowButton";
import AppIcon from "../../common/AppIcon";
import axios from "axios";
import SearchChargerHome from "../SearchChargerHome/index";
import RegisterUser from "../RegisterUser/index";
const firebaseConfig = {
  apiKey: "AIzaSyCRXuDZ7uqMRsuGm-EiT6dW0n636bf-VwA",
  authDomain: "shareandcharge.firebaseapp.com",
  projectId: "shareandcharge",
  storageBucket: "shareandcharge.appspot.com",
  messagingSenderId: "16778233937",
  appId: "1:16778233937:web:dd822b6b1d0d33a24f9070",
  measurementId: "G-JV3241D0SC",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function Home() {
  const [user] = useAuthState(auth);
  const [loginServer, setLoginServer] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("username")!== null){
    axios
      .get(DOMAIN + "/login?email=" + localStorage.getItem("username"))
      .then((res) => {
        console.log("username : " + localStorage.getItem("username"));
        console.log("*****" + JSON.stringify(res.data));
        if (res.data !== [] || res != undefined) {
          setLoginServer(true);
          console.log("login success");
          console.log(res.data);
          localStorage.setItem("englishname", res.data[0].name);
        } else {
          setLoginServer(false);
          alert(res.data);
          console.log("unregistered user");
          localStorage.setItem(
            "temp_username",
            localStorage.getItem("username")
          );
          localStorage.removeItem("username");
        }
      });}
  }, [user]);

  return (
    <>
      {user ? (
        loginServer ? (
          <SearchChargerHome auth={auth} />
        ) : (
          <RegisterUser setLoginServer={setLoginServer} />
        )
      ) : (
        <Greeting />
      )}
    </>
  );
}

// cookies.set(key2, value2, {secure: true, sameSite: 'none'});
function Greeting({ username, setUsername, uname, setName }) {
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;

        // The signed-in user info.
        var user_email = result.user.email;
        console.log(user_email);
        console.log(token);
        localStorage.setItem("username", user_email);
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const click = () => {
    console.log("click");
  };

  return (
    <BaseLayout>
      <SplashLayout>
        <AppIcon width="80px" height="80px" />
        <AppLabel>Share & Charge</AppLabel>
      </SplashLayout>
      <ButtonWrapper onClick={onSubmit}>
        <ShadowButton onClick={click}>
          <FontAwesomeIcon icon={faGoogle} />
          &nbsp;&nbsp;구글 계정으로 로그인
        </ShadowButton>
      </ButtonWrapper>
    </BaseLayout>
  );
}

export default Home;
