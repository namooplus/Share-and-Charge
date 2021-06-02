import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ShadowButton from '../view/ShadowButton';

function RegisterCharger(props) {
  return (
    <BaseLayout>
        <BackIcon><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
        <HeaderLayout>
            
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
const BackIcon = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    margin: 30px;
    background-color: rgba(50, 50, 50, 0.7);
    border-radius: 50%;
    font-size: 1.5rem;
    color: white;
    transition: background-color 500ms;

    &:hover {
        background-color: rgba(50, 50, 50, 1.0);
    }
`
const HeaderLayout = styled.div`
    height: 150px;
    padding: 30px;
    background-color: lightgray;
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