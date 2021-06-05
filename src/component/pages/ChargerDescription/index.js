/*global kakao*/
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

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
    
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

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

        // 예약 시간 설정
        setStartTime(chargerData.time.split('~')[0]);
        setEndTime(chargerData.time.split('~')[1]);
    }, []);

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };
    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };
    const requestShare = () => {
        if (startTime > endTime)
            alert('종료 시간이 시작 시간보다 빠를 수 없습니다.');
        else if (startTime == endTime)
            alert('시작 시간과 종료 시간이 같을 수 없습니다.');
        else
        {
            alert(`${startTime}~${endTime}으로 예약 요청합니다.`);
            props.history.push({
                pathname: "/chat",
                state: {
                    provider: {
                        id: "kyle"
                    },
                    customer: {
                        id: "namoo"
                    },
                    charger : {
                        startTime: startTime,
                        endTime: endTime
                    }
                }
            });
        }
    };

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
            {/* 자신의 충전소일 경우 공유 요청 레이아웃 숨기기 */}
            {
                chargerData.user_email != localStorage.getItem('username') ? (
                    <FooterLayout>
                        <SelectLayout>
                            <ShadowSelector value={startTime} onChange={handleStartTimeChange} />
                            ~
                            <ShadowSelector value={endTime} onChange={handleEndTimeChange}/>
                        </SelectLayout>
                        <ShadowButton onClick={requestShare}>요청하기</ShadowButton>
                    </FooterLayout>
                ) : null
            }
            
        </BaseLayout>
    );
}

export default withRouter(ChargerDescription);

