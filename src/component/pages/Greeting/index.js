import React from 'react';

import { BaseLayout, SplashLayout, AppLabel } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';

function Greeting(props) {
  return (
    <BaseLayout>
        <SplashLayout>
            <AppIcon width="80px" height="80px"/>
            <AppLabel>Share & Charge</AppLabel>
        </SplashLayout>
        <ShadowButton><FontAwesomeIcon icon={faGoogle}/>&nbsp;&nbsp;구글 계정으로 로그인</ShadowButton>
    </BaseLayout>
  );
}

export default Greeting;