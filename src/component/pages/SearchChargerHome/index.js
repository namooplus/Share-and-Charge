import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ToggleLayout, ToggleItem, ContentLayout } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from '../../common/ShadowCard';
import AppIcon from '../../common/AppIcon';

import axios from 'axios';

import tempChargerImage from '../../../img/temp-charger-image.png';

function SearchChargerHome(props) {
    const [chargerList, setChargerList] = useState([0]);

    const successGet = (position) => {
        // 주변의 공유 충전소 리스트 요청
        // axios.post('/api/chargeList', {
        //     latitude: position.coords.latitude,
        //     longitude: position.coords.longitude
        // })
        axios.get('./tempData/chargerList.json')
        // 주변의 공유 충전소 리스트 출력
        .then(res => {
            setChargerList(res.data);
        })
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
                    <MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon>
                </MenuLayout>
                <HeaderLabel>주변의 공유 충전소</HeaderLabel>
                <ToggleLayout>
                    <ToggleItem selected>리스트</ToggleItem>
                    <ToggleItem><Link style={{textDecoration: "none", color: "inherit"}} to="/map">지도</Link></ToggleItem>
                </ToggleLayout>
            </HeaderLayout>
            <ContentLayout>
                {chargerList.map((data) => {
                    if (data === 0)
                        return <div style={{textAlign: 'center'}}>불러오는 중...</div>
                    else if (data === 1)
                        return <div style={{textAlign: 'center'}}>오류 : 주변의 공유 충전소를 불러올 수 없습니다!</div>
                    else
                        return (
                            <Link 
                                style={{textDecoration: "none", color: "inherit"}} 
                                to={{
                                    pathname: "/detail",
                                    state: data
                                }}>
                                <ShadowCard
                                    chargerImage={tempChargerImage}
                                    chargerTitle={data.name}
                                    chargerDescription={`${data.distance} | ${data.price} | ${data.time}`}
                                    chargerUserIcon
                                    chargerUserLabel={data.share}/>
                            </Link>
                        )
                })}
            </ContentLayout>
        </BaseLayout>
    );
}

export default SearchChargerHome;