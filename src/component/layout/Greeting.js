import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../view/ShadowButton';

function Greeting(props) {
  return (
    <BaseLayout>
        <SplashLayout>
            <AppIcon/>
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
const AppIcon = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 10px #aaaaaa;
`
const AppLabel = styled.h1`
    margin-top: 30px;
    font-size: 1.4rem;
`
