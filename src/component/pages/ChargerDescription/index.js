/*global kakao*/
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { BaseLayout, BackIcon, HeaderLayout, Image, ContentLayout, Title, UserLabel, Description, Map, FooterLayout, SelectLayout } from './components';
import ShadowPicker from '../../common/ShadowPicker';
import ShadowButton from '../../common/ShadowButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';
import { DOMAIN } from '../../../util/domain';

function ChargerDescription(props) {
    const chargerData = props.location.state;
    if (!chargerData)
        props.history.goBack();
    
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    useEffect(() => {
        // 충전소 위치 지도 표시
        const location = new kakao.maps.LatLng(chargerData.y, chargerData.x);
        let container = document.getElementById('charger-map-detail');
        let options = {
            center: location,
            level: 2
        };
        const map = new kakao.maps.Map(container, options);

        // 충전소 마커 추가
        var marker = new kakao.maps.Marker({
            position: location
        });
        marker.setMap(map);

        // 예약 시간 설정
        setStartTime(12);
        setEndTime(14);
    }, []);

    const handleStartTimeChange = (event) => {
        setStartTime(parseInt(event.target.value));
    };
    const handleEndTimeChange = (event) => {
        setEndTime(parseInt(event.target.value));
    };

    const convertArrayToRange = () => {
        let timeRange = "";
        let startPoint = 0;
        let prev = chargerData.available[0];

        for (let i in chargerData.available)
        {
            if (i == 0) continue;
            let cur = chargerData.available[i];
            
            // split point
            if (cur > prev + 1)
            {
                timeRange += `${chargerData.available[startPoint]}시 ~ ${chargerData.available[i - 1] + 1}시, `;
                startPoint = i;
            }

            prev = cur;
        }
        timeRange += `${chargerData.available[startPoint]}시 ~ ${chargerData.available[chargerData.available.length - 1] + 1}시`;

        return timeRange;
    }

    const requestShare = () => {
        if (startTime > endTime)
            alert('종료 시간이 시작 시간보다 빠를 수 없습니다.');
        else if (startTime == endTime)
            alert('시작 시간과 종료 시간이 같을 수 없습니다.');
        else
        {
            axios.get(`${DOMAIN}/paymentValidCheck/${localStorage.getItem('username')}/${chargerData.charger_key}/${startTime}/${endTime - 1}`)
            .then(res => {
                if (res.status == 200)
                {
                    alert(`${startTime}시 ~${endTime}시로 예약을 요청합니다.`);
                    props.history.push({
                        pathname: "/chat",
                        state: {
                            provider: {
                                id: chargerData.email
                            }
                        }
                    });
                }
                else
                    alert('선택한 시간으로 예약 요청이 불가능합니다.');
            })
            .catch(err => {
                alert('예약 요청이 불가능합니다.');
            });
        }
    };

    return (
        <BaseLayout>
            <BackIcon onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
            <HeaderLayout>
                <Image src={chargerData.image_src}/>
            </HeaderLayout>
            <ContentLayout>
                <Title>{`${chargerData.region_1depth_name} ${chargerData.region_2depth_name} ${chargerData.region_3depth_name}`}</Title>
                <UserLabel>{chargerData.owner_name}</UserLabel>
                <Description>
                    위치 : {chargerData.address_name}
                    <br/>
                    가격 : 시간 당 {chargerData.price_per_hour}원
                    <br/>
                    사용가능시간 : {convertArrayToRange()}
                </Description>
                <Map id="charger-map-detail"/>
            </ContentLayout>
            {/* 자신의 충전소일 경우 공유 요청 레이아웃 숨기기 */}
            {
                chargerData.email != localStorage.getItem('username') ? (
                    <FooterLayout>
                        <SelectLayout>
                            <ShadowPicker value={startTime} onChange={handleStartTimeChange}/>
                            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
                            <ShadowPicker value={endTime} onChange={handleEndTimeChange}/>
                        </SelectLayout>
                        <ShadowButton onClick={requestShare}>요청하기</ShadowButton>
                    </FooterLayout>
                ) : null
            }
        </BaseLayout>
    );
}

export default withRouter(ChargerDescription);

