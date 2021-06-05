/*global kakao*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ToggleLayout, ToggleItem, ContentLayout, Map } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AppIcon from '../../common/AppIcon';

import axios from 'axios';

function MapView(props) {
    const [chargerList, setChargerList] = useState([0]);
    let map;

    const showInMap = (chargerData) => {
        // 마커 표시
        for (let charger of chargerData)
        {
            var marker = new kakao.maps.Marker({
                map: map,
                title: charger.name,
                position: new kakao.maps.LatLng(charger.position.latitude, charger.position.longitude)
            });
        }
    }
    const successGet = (position) => {
        // 주변의 공유 충전소 리스트 요청
        // axios.post('/api/chargeList', {
        //     latitude: position.coords.latitude,
        //     longitude: position.coords.longitude
        // })
        axios.get('./tempData/chargerList.json')
        // 주변의 공유 충전소 리스트 출력
        .then(res => {
            const chargerData = res.data;
            setChargerList(chargerData);

            // 지도 표시
            let container = document.getElementById('charger-map-all');
            let options = {
                center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                level: 5
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
                <Map id="charger-map-all"/>
            </ContentLayout>
        </BaseLayout>
    );
}

export default MapView;