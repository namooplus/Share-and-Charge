/*global kakao*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ToggleLayout, ToggleItem, ContentLayout, Map } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AppIcon from '../../common/AppIcon';

import axios from 'axios';
import { DOMAIN } from '../../../util/domain';

function MapView(props) {
    const [chargerList, setChargerList] = useState([0]);
    let map;

    const showInMap = (chargerData) => {
        // 마커 표시
        for (let charger of chargerData)
        {
            var marker = new kakao.maps.Marker({
                map: map,
                title: charger.address_name,
                position: new kakao.maps.LatLng(parseFloat(charger.y), parseFloat(charger.x)),
                clickable: true
            });
            kakao.maps.event.addListener(marker, 'click', function() {
                 props.history.push({
                    pathname: "/detail",
                    state: charger
                 });
            });
        }
    }
    const successGet = (position) => {
        // 주변의 공유 충전소 리스트 요청
        // axios.get(`${DOMAIN}/current/${position.coords.latitude}/${position.coords.longitude}`)
        axios.get('./tempData/chargerList.json')
        // 주변의 공유 충전소 리스트 출력
        .then(res => {
            const chargerData = res.data.chargers_near;
            setChargerList(chargerData);

            // 지도 표시
            let container = document.getElementById('charger-map-all');
            let options = {
                center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                level: 6
            };
            map = new kakao.maps.Map(container, options);
            return chargerData;
        })
        .then(showInMap)
        .catch(err => {
            setChargerList([1]);
        });
    };
    const failGet = () => {
        setChargerList([1]);
    };

    useEffect(() => {
        // 현재 위치 찾기
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(successGet, failGet);
        else
            setChargerList([1]);
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <Link to="/menu"><MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon></Link>
                </MenuLayout>
                <HeaderLabel>주변의 공유 충전소</HeaderLabel>
                <ToggleLayout>
                    <ToggleItem>
                        <Link style={{textDecoration: "none", color: "inherit"}} to="/">리스트</Link>
                    </ToggleItem>
                    <ToggleItem selected>지도</ToggleItem>
                </ToggleLayout>
            </HeaderLayout>
            <ContentLayout>
                {chargerList.map((data) => {
                    if (data === 0)
                        return <div style={{textAlign: 'center'}}>불러오는 중...</div>
                    else if (data === 1)
                        return <div style={{textAlign: 'center'}}>오류 : 주변의 공유 충전소를 불러올 수 없습니다!</div>
                    else
                        return null;
                })}
                <Map id="charger-map-all"/>
            </ContentLayout>
        </BaseLayout>
    );
}

export default withRouter(MapView);