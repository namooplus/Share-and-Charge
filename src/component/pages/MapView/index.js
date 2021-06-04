/*global kakao*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ToggleLayout, ToggleItem, ContentLayout, Map } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AppIcon from '../../common/AppIcon';

import axios from 'axios';

function MapView(props) {
    const successGet = (position) => {
        let container = document.getElementById('charger-map-all');
        let options = {
            center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);
    };
    const failGet = () => {
        
    };

    useEffect(() => {
        // 현재 위치 찾기
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(successGet, failGet);
        else
        {

        }
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon>
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