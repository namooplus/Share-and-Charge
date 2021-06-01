import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../view/ShadowButton';
import AppIcon from '../view/AppIcon';

function Greeting(props) {
  return (
    <BaseLayout>
        <SplashLayout>
            <AppIcon width="80px" height="80px"/>
            <AppLabel>Share & Charge</AppLabel>
        </SplashLayout>
        <ShadowButton>
            구글 계정으로 로그인
        </ShadowButton>
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
