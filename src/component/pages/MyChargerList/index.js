import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ContentLayout, FooterLayout } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from '../../common/ShadowCard';
import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';

import axios from 'axios';

import tempChargerImage from '../../../img/temp-charger-image.png';

function MyChargerList(props) {
    const [myChargerList, setMyChargerList] = useState([0]);

    useEffect(() => {
        // 나의 공유 충전소 리스트 요청
        // axios.post('/api/myChargerList', {
        //     userId: ...
        // })
        axios.get('./tempData/myChargerList.json')
        // 나의 공유 충전소 리스트 출력
        .then(res => {
            setMyChargerList(res.data);
        })
        .catch(err => {
            setMyChargerList([1]);
        });
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <Link to="/menu"><MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon></Link>
                </MenuLayout>
                <HeaderLabel>나의 공유 충전소</HeaderLabel>
            </HeaderLayout>
            <ContentLayout>
                {myChargerList.map((data) => {
                    if (data === 0)
                        return <div style={{textAlign: 'center'}}>불러오는 중...</div>
                    else if (data === 1)
                        return <div style={{textAlign: 'center'}}>오류 : 나의 공유 충전소를 불러올 수 없습니다!</div>
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
                                    chargerDescription={`${data.distance_from} | ${data.price} | ${data.time}`}
                                    type="self"/>                                
                            </Link>     
                        )
                })}
            </ContentLayout>
            <FooterLayout>
                <Link style={{textDecoration: "none", color: "inherit"}} to="/registercharger">
                    <ShadowButton>추가하기</ShadowButton>
                </Link>
            </FooterLayout>
        </BaseLayout>
  );
}

export default MyChargerList;