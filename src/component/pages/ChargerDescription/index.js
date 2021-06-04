import React from 'react';

import { BaseLayout, BackIcon, HeaderLayout, Image, ContentLayout, Title, UserLayout, UserIcon, UserLabel, Description, MapView, FooterLayout, SelectLayout } from './components';
import ShadowSelector from '../../common/ShadowSelector';
import ShadowButton from '../../common/ShadowButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import tempChargerImage from '../../../img/temp-charger-image.png';

function ChargerDescription(props) {
    const chargerData = props.location.state;
    if (!chargerData) {
        alert('잘못된 접근입니다.');
        return props.history.goBack();
    }

    return (
        <BaseLayout>
            <BackIcon onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
            <HeaderLayout>
                <Image src={tempChargerImage}/>
            </HeaderLayout>
            <ContentLayout>
                <Title>{chargerData.name}</Title>
                <UserLayout>
                    <UserIcon/>
                    <UserLabel>{chargerData.share}</UserLabel>
                </UserLayout>
                <Description>
                    위치 : {chargerData.location}
                    <br/>
                    가격 : 시간 당 {chargerData.price}
                    <br/>
                    사용가능시간 : {chargerData.time}
                    <br/>
                    충전소 정보 : {chargerData.chargeinfo}
                    <br/>
                    공유자 메모 : {chargerData.memo}
                </Description>
                <MapView/>
            </ContentLayout>
            <FooterLayout>
                <SelectLayout>
                    <ShadowSelector value={chargerData.time.split('~')[0]}/>
                    ~
                    <ShadowSelector value={chargerData.time.split('~')[1]}/>
                </SelectLayout>
                <ShadowButton>요청하기</ShadowButton>
            </FooterLayout>
        </BaseLayout>
    );
}

export default ChargerDescription;

