import React from 'react';

import { BaseLayout, SplashLayout, AppLabel } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {GoogleLogin} from "react-google-login"

import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';
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