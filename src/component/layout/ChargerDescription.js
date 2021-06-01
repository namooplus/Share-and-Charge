import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ShadowSelector from '../view/ShadowSelector';
import ShadowButton from '../view/ShadowButton';

import tempChargerImage from '../../img/temp-charger-image.png';

function ChargerDescription(props) {
  return (
    <BaseLayout>
        <BackIcon><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
        <HeaderLayout>
            <Image src={tempChargerImage}/>
        </HeaderLayout>
        <ContentLayout>
            <Title>충전소 A</Title>
            <UserLayout>
                <UserIcon/>
                <UserLabel>User A</UserLabel>
            </UserLayout>
            <Description>
                위치 : 서울특별시 서대문구 성산로 408-3
                <br/>
                가격 : 시간 당 1650원
                <br/>
                사용가능시간 : 13:00~18:00 (5시간)
                <br/>
                충전소 정보 : 220V
                <br/>
                공유자 메모 : 충전 케이블도 같이 구비되어 있습니다.
            </Description>
            <MapView/>
        </ContentLayout>
        <FooterLayout>
            <SelectLayout>
                <ShadowSelector value="14:00"/>
                ~
                <ShadowSelector value="17:00"/>
            </SelectLayout>
            <ShadowButton>요청하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default ChargerDescription;

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
    height: 200px;
`
const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`
const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 216px 30px;
`
const Title = styled.h1`
    margin: 0px;
    font-size: 1.5rem;
`
const UserLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: 15px;
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
    line-height: 1.5rem;
`
const MapView = styled.div`
    height: 230px;
    background-color: lightgray;
    margin-top: 15px;
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
const SelectLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 20px;
`