import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {GoogleLogin} from "react-google-login"
import ShadowButton from '../view/ShadowButton';
import AppIcon from '../view/AppIcon';
// client pw :_WeZKKlPuJQouGS1R0Jm2pP3
const responseGoogle = (response) =>{
    console.log(response);
    console.log(response.profileObj);

}
function Greeting(props) {
    
  return (
    <BaseLayout>
        <SplashLayout>
            <AppIcon width="80px" height="80px"/>
            <AppLabel>Share & Charge</AppLabel>
        </SplashLayout>
        <GoogleLogin
            clientId="16778233937-f1jvjb9bsru3kjgsri1b9oojg2qvbie2.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
        <ShadowButton><FontAwesomeIcon icon={faGoogle}/>&nbsp;&nbsp;구글 계정으로 로그인</ShadowButton>
    </BaseLayout>
  );
}

export default Greeting;

const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 30px;
`
const SplashLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
`
const AppLabel = styled.h1`
    margin-top: 15px;
    font-size: 1.4rem;
`
