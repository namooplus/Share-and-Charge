import React from 'react';
import styled from 'styled-components';

import ShadowSelector from '../view/ShadowSelector';
import ShadowButton from '../view/ShadowButton';

function RegisterCharger(props) {
  return (
    <BaseLayout>
        <HeaderLayout>
            <BackIcon/>
        </HeaderLayout>
        <ContentLayout>
            <TitleInput placeholder="충전소 이름"/>
            <Description>
                위치 : <Input/>
                <br/>
                가격 : 시간 당 <Input/>
                <br/>
                사용가능시간 : <Input/>~<Input/>
                <br/>
                충전소 정보 : <Input/>
                <br/>
                공유자 메모 : <Input/>
            </Description>
        </ContentLayout>
        <FooterLayout>
            <ShadowButton>등록하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default RegisterCharger;

const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
const HeaderLayout = styled.div`
    height: 150px;
    padding: 30px;
    background-color: lightgray;
`
const BackIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: gray;
`
const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 138px 30px;
`
const TitleInput = styled.input`
    border:none;
    border-bottom: 1px solid black;
    font-size: 1.5rem;

    &:focus {
        outline: none;
    }
`
const Description = styled.p`
    margin: 0px;
    margin-top: 20px;
    font-size: 0.9rem;
    line-height: 2rem;
`
const Input = styled.input`
    border:none;
    border-bottom: 1px solid black;
    font-size: 0.9rem;

    &:focus {
        outline: none;
    }
`
const FooterLayout = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
    gap: 30px;
`