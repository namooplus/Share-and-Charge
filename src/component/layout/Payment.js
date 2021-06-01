import React from 'react';
import styled from 'styled-components';

import ShadowButton from '../view/ShadowButton';

function Payment(props) {
  return (
    <BaseLayout>
        <HeaderLayout>
            <BackIcon/>
            <HeaderLabel>결제</HeaderLabel>
        </HeaderLayout>
        <ContentLayout>
            <Panel>
                <UserLayout>
                    <UserIcon/>
                    <UserLabel>User A</UserLabel>
                </UserLayout>
                <Description>
                    현재 크레딧 : 10000
                    <br/>
                    사용 크레딧 : 4950 (3시간 이용)
                    <br/>
                    결제 후 남은 크레딧 : 5050
                </Description>
            </Panel>
            <ArrowIcon/>
            <Panel>
                <UserLayout>
                    <UserIcon/>
                    <UserLabel>User B</UserLabel>
                </UserLayout>
            </Panel>
        </ContentLayout>
        <FooterLayout>
            <ShadowButton>결제하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default Payment;

const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
const HeaderLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 30px 30px 0 30px;
`
const BackIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: gray;
`
const HeaderLabel = styled.h1`
    margin: 0px;
    margin-top: 30px;
    font-size: 1.5rem;
`
const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 30px 30px 138px 30px;
    gap: 30px;
`
const Panel = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 20px lightgray;
    box-sizing: border-box;
`
const UserLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`
const UserIcon = styled.div`
    width: 25px;
    height: 25px;
    background-color: gray;
    border-radius: 50%;
`
const UserLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 10px;
`
const Description = styled.p`
    margin: 0px;
    margin-top: 15px;
    font-size: 0.9rem;
    line-height: 1.3rem;
`
const ArrowIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: gray;
`
const FooterLayout = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
`