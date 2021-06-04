import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ShadowSelector from '../view/ShadowSelector';
import ShadowButton from '../view/ShadowButton';

import tempChargerImage from '../../img/temp-charger-image.png';
import {BaseLayout, BackIcon, HeaderLabel, Image, ContentLayout, Title, UserIcon, UserLabel, MapView, SelectLayout,HeaderLayout, UserLayout,Description, FooterLayout} from './components/ChargerDescription.components'
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

