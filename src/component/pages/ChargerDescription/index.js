/*global kakao*/
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { BaseLayout, BackIcon, HeaderLayout, Image, ContentLayout, Title, UserLayout, UserIcon, UserLabel, Description, Map, FooterLayout, SelectLayout } from './components';
import ShadowSelector from '../../common/ShadowSelector';
import ShadowButton from '../../common/ShadowButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import tempChargerImage from '../../../img/temp-charger-image.png';

function ChargerDescription(props) {
    const chargerData = props.location.state;
    if (!chargerData)
        props.history.goBack();

    useEffect(() => {
        // 충전소 위치 지도 표시
        const location = new kakao.maps.LatLng(chargerData.position.latitude, chargerData.position.longitude);
        let container = document.getElementById('charger-map-detail');
        let options = {
            center: location,
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        // 충전소 마커 추가
        var marker = new kakao.maps.Marker({
            position: location
        });
        marker.setMap(map);
    }, []);

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
                    <UserLabel>{chargerData.user}</UserLabel>
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
                <Map id="charger-map-detail"/>
            </ContentLayout>
            <FooterLayout>
                <SelectLayout>
                    <ShadowSelector value={chargerData.time.split('~')[0]}/>
                    ~
                    <ShadowSelector value={chargerData.time.split('~')[1]}/>
                </SelectLayout>
                <Link style={{textDecoration: "none", color: "inherit"}} to="/chat">
                    <ShadowButton>요청하기</ShadowButton>
                </Link>
            </FooterLayout>
        </BaseLayout>
    );
}

export default withRouter(ChargerDescription);

